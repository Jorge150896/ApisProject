import { types } from '../types/types';

export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true
      };

    case types.logout:
      return {
        logged: false
      };

    case types.loginAdmin:
      return {
        ...action.payload,
        loggedAdmin: true
      };

    case types.logoutAdmin:
      return {
        loggedAdmin: false
      };

    default:
      return state;
  }
};
