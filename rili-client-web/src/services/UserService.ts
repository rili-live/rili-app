import axios from 'axios';
import { IUserState } from 'types/user';
import { IAccess, AccessCheckType } from '../types';

interface ILoginCredentials {
  userName: string;
  password: string;
}

interface ILogoutCredentials {
  userName: string;
}

interface IRegisterCredentials {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  userName: string;
  password: string;
}

class UserService {
  authenticate = (data: ILoginCredentials) => axios({
      method: 'post',
      url: '/auth',
      data,
  })

  create = (data: IRegisterCredentials) => axios({
      method: 'post',
      url: '/users',
      data,
  })

  isAuthorized = (access: IAccess, user: IUserState) => {
      if (user && user.details && user.details.accessLevels) {
          if (access.type === AccessCheckType.NONE) {
              // User does not have any of the access levels from the check
              return !access.levels.some((lvl) => user.details.accessLevels.includes(lvl));
          }
          if (access.type === AccessCheckType.ANY) {
              // User has at least one of the access levels from the check
              return access.levels.some((lvl) => user.details.accessLevels.includes(lvl));
          }
          if (access.type === AccessCheckType.ALL) {
              // User has all of the access levels from the check
              return !access.levels.some((lvl) => !user.details.accessLevels.includes(lvl));
          }
      }

      return false;
  }

  logout = (data: ILogoutCredentials) => axios({
      method: 'post',
      url: '/auth/logout',
      data,
  })
}

export default new UserService();
