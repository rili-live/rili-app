import * as bcrypt from 'bcrypt';
import { RequestHandler } from 'express';
import * as jwt from 'jsonwebtoken';
import handleHttpError from '../utilities/handleHttpError';
import UsersStore from '../store/UsersStore';
import { createUserToken } from '../utilities/userHelpers';

// Authenticate user
const login: RequestHandler = (req: any, res: any) => UsersStore
    .getUsers({ userName: req.body.userName }, { email: req.body.userName })
    .then((results) => {
        if (!results.length) {
            return res.status(404).send('User not found');
        }
        return bcrypt
            .compare(req.body.password, results[0].password)
            .then((isValid) => [results, isValid]);
    })
    .then(([results, isValid]) => {
        if (isValid) {
            const idToken = createUserToken(results[0], req.body.rememberMe);
            return res.status(201).send({
                ...results[0],
                idToken,
            });
        }

        return handleHttpError({
            res,
            message: 'Incorrect username or password',
            statusCode: 401,
        });
    })
    .catch((err) => handleHttpError({ err, res, message: 'SQL:AUTH_ROUTES:ERROR' }));

// Logout user
const logout: RequestHandler = (req: any, res: any) => UsersStore.getUsers({ userName: req.body.userName })
    .then((results) => {
        if (!results.length) {
            return handleHttpError({
                res,
                message: 'User not found',
                statusCode: 404,
            });
        }
        // TODO: Invalidate token
        res.status(204).send();
    })
    .catch((err) => handleHttpError({ err, res, message: 'SQL:AUTH_ROUTES:ERROR' }));

const verifyToken: RequestHandler = (req: any, res: any) => {
    try {
        const decodedToken = jwt.verify(req.body.idToken, process.env.SECRET || '');
        return res.status(200).send(decodedToken);
    } catch (err) {
        if (err.name === 'TokenExpiredError') {
            return handleHttpError({
                res,
                err,
                message: err.message,
                statusCode: 401,
            });
        }

        return handleHttpError({ err, res, message: 'SQL:AUTH_ROUTES:ERROR' });
    }
};

export {
    login,
    logout,
    verifyToken,
};