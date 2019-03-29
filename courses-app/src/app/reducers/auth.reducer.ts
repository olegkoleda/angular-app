import { AuthActionsUnion, AuthActionTypes } from './../actions/auth.actions';


export interface AuthState {
    token: string;
  }

  export const initialAuthState: AuthState = {
    token: '',
  };

export function authReducer(state = initialAuthState, action: AuthActionsUnion) {
    switch (action.type) {
      case AuthActionTypes.LoginSuccess: {
        return {
          token: action.payload.token,
        };
      }

      case AuthActionTypes.Logout: {
        return initialAuthState;
      }

      default: {
        return state;
      }
    }
  }
