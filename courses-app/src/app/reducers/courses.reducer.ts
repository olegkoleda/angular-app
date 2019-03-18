import { CoursesActionsUnion, CoursesActionTypes } from './../actions/courses.actions';
import { Course } from '../courses-list/course.module';


export interface coursesState {
    courses: Course[];
  }
  
  export const initialcoursesState: coursesState = {
    courses: null,
  };
  
// export function authReducer(state = initialcoursesState, action: CoursesActionsUnion) {
//     switch (action.type) {
//       case CoursesActionTypes.LoginSuccess: {
//         return {
//           ...state,
//           token: action.payload,
//         };
//       }
  
//       case CoursesActionTypes.Logout: {
//         return initialcoursesState;
//       }
  
//       default: {
//         return state;
//       }
//     }
//   }