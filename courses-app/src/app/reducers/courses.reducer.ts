import { CoursesActionsUnion, CoursesActionTypes } from './../actions/courses.actions';
import { Course } from '../courses-list/course.module';


export interface CoursesState {
    courses: Course[];
  }

  export const initialcoursesState: CoursesState = {
    courses: null,
  };

export function coursesReducer(state = initialcoursesState, action: CoursesActionsUnion) {
    switch (action.type) {

      default: {
        return state;
      }
    }
  }
