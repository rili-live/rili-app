import Knex from 'knex';
import { getDbCountQueryString } from 'rili-public-library/utilities/db.js';
import formatSQLJoinAsJSON from 'rili-public-library/utilities/format-sql-join-as-json.js';
import connection, { IConnection } from './connection';
import { USER_CONNECTIONS_TABLE_NAME } from './UserConnectionsStore';

const knex: Knex = Knex({ client: 'pg' });

const NOTIFICATIONS_TABLE_NAME = 'main.notifications';

export enum NotificationTypes {
    CONNECTION_REQUEST_RECEIVED = 'CONNECTION_REQUEST_RECEIVED',
}

export enum NotificationMessages {
    CONNECTION_REQUEST_RECEIVED = 'You have received a new connection request from {{firstName}} {{lastName}}',
}

export interface ICreateNotificationParams {
    userId: number;
    type: NotificationTypes;
    associationId?: number;
    isUnread: boolean;
    message?: NotificationMessages;
    messageParams?: any;
}

export interface IUpdateNotificationConditions {
    id: number;
}

export interface IUpdateNotificationParams {
    type?: string;
    associationId?: number;
    isUnread?: boolean;
    message?: string;
    messageParams?: any;
}

class Store {
    db: IConnection;

    constructor(dbConnection) {
        this.db = dbConnection;
    }

    countRecords(params) {
        const queryString = getDbCountQueryString({
            queryBuilder: knex,
            tableName: NOTIFICATIONS_TABLE_NAME,
            params,
            defaultConditions: {},
        });

        return this.db.read.query(queryString).then((response) => response.rows);
    }

    getNotifications(conditions = {}) {
        const queryString = knex.select('*')
            .from(NOTIFICATIONS_TABLE_NAME)
            .where(conditions)
            .toString();
        return this.db.read.query(queryString).then((response) => response.rows);
    }

    // TODO: RSERV:25 - Make this dynamic to support various associationIds
    searchNotifications(conditions: any = {}) {
        const offset = conditions.pagination.itemsPerPage * (conditions.pagination.pageNumber - 1);
        const limit = conditions.pagination.itemsPerPage;
        let queryString: any = knex
            .select([
                `${NOTIFICATIONS_TABLE_NAME}.id`,
                `${NOTIFICATIONS_TABLE_NAME}.userId`,
                `${NOTIFICATIONS_TABLE_NAME}.type`,
                `${NOTIFICATIONS_TABLE_NAME}.associationId`,
                `${NOTIFICATIONS_TABLE_NAME}.isUnread`,
                `${NOTIFICATIONS_TABLE_NAME}.message`,
                `${NOTIFICATIONS_TABLE_NAME}.messageParams`,
                `${NOTIFICATIONS_TABLE_NAME}.createdAt`,
                `${NOTIFICATIONS_TABLE_NAME}.updatedAt`,
            ])
            .from(NOTIFICATIONS_TABLE_NAME)
            .innerJoin(USER_CONNECTIONS_TABLE_NAME, `${NOTIFICATIONS_TABLE_NAME}.associationId`, `${USER_CONNECTIONS_TABLE_NAME}.id`)
            .columns([
                `${USER_CONNECTIONS_TABLE_NAME}.requestingUserId as userConnection.requestingUserId`,
                `${USER_CONNECTIONS_TABLE_NAME}.acceptingUserId as userConnection.acceptingUserId`,
                `${USER_CONNECTIONS_TABLE_NAME}.requestStatus as userConnection.requestStatus`,
                `${USER_CONNECTIONS_TABLE_NAME}.updatedAt as userConnection.updatedAt`,
            ])
            .orderBy(`${NOTIFICATIONS_TABLE_NAME}.updatedAt`);

        if (conditions.filterBy && conditions.query) {
            const operator = conditions.filterOperator || '=';
            const query = operator === 'like' ? `%${conditions.query}%` : conditions.query;
            queryString = queryString.andWhere(conditions.filterBy, operator, query);
        }

        queryString = queryString
            .limit(limit)
            .offset(offset)
            .toString();

        return this.db.read.query(queryString).then((response) => {
            const configuredResponse = formatSQLJoinAsJSON(response.rows);
            // delete configuredResponse.requestingUserId;
            // delete configuredResponse.acceptingUserId;
            // delete configuredResponse.requestStatus;
            return configuredResponse;
        });
    }

    createNotification(params: ICreateNotificationParams) {
        const modifiedParams = {
            ...params,
            messageParams: JSON.stringify(params.messageParams),
        };
        const queryString = knex.insert(modifiedParams)
            .into(NOTIFICATIONS_TABLE_NAME)
            .returning('*')
            .toString();

        return this.db.write.query(queryString).then((response) => response.rows);
    }

    updateNotification(conditions: IUpdateNotificationConditions, params: IUpdateNotificationParams) {
        const queryString = knex.update({
            ...params,
            updatedAt: new Date(),
        })
            .into(NOTIFICATIONS_TABLE_NAME)
            .where(conditions)
            .returning('*')
            .toString();

        return this.db.write.query(queryString).then((response) => response.rows);
    }
}

export default new Store(connection);