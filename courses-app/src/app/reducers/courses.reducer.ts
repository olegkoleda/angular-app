import { CoursesActionsUnion, CoursesActionTypes } from './../actions/courses.actions';
import { Course } from '../courses-list/course.module';


export interface CoursesState {
    courses: Course[];
  }

  export const initialcoursesState: CoursesState = {
    courses: [],
  };

export function coursesReducer(state = initialcoursesState, action: CoursesActionsUnion) {
    switch (action.type) {
      case CoursesActionTypes.GetSuccess: {
        return {
          ...state,
          courses: [...state.courses, ...action.payload],
        };
      }
      
      case CoursesActionTypes.RemoveSuccsess: {
        return {
          courses: state.courses.filter( course => course.id !== action.payload),
        };
      }

      default: {
        return state;
      }
    }
  }
