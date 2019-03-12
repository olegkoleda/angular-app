import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { AuthActionsUnion, AuthActionTypes } from './../actions/auth.actions';


export interface State {
  auth: AuthState;
}

export interface AuthState {
  token: string;
}

export const initialAuthState: AuthState = {
  token: null,
};

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];



export function authReducer(state = initialAuthState, action: AuthActionsUnion) {
  switch (action.type) {
    case AuthActionTypes.LoginSuccess: {
      return {
        ...state,
        token: action.payload,
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
