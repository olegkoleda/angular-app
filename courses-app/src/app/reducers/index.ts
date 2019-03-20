import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {AuthState, authReducer} from './auth.reducer';
import { CoursesState, coursesReducer } from './courses.reducer';


export interface State {
  auth: AuthState;
  courses: CoursesState;
}

export const reducers: ActionReducerMap<State> = {
  auth: authReducer,
  courses: coursesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectCourses = (state: State) => state.courses;

export const selectAllCourses = createSelector(
  selectCourses,
  (state: CoursesState) => state.courses
);
