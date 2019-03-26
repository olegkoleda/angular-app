import { Action } from '@ngrx/store';
import { Course } from '../courses-list/course.module';

export enum CoursesActionTypes {
  Get = '[Courses] Get',
  GetSuccess = '[Courses] GetSuccess',
  Add = '[Courses] Add',
  Remove = '[Courses] Remove',
  Edit = '[Courses] Edit',
}

export class Get implements Action {
  readonly type = CoursesActionTypes.Get;

  constructor(public payload: {}) {}
}
export class GetSuccess implements Action {
  readonly type = CoursesActionTypes.GetSuccess;

  constructor(public payload: Course[]) {}
}

export class Add implements Action {
  readonly type = CoursesActionTypes.Add;

  constructor(public payload: Course) {}
}

export class Remove implements Action {
  readonly type = CoursesActionTypes.Remove;

  constructor(public payload: {id: number}) {}
}

export class Edit implements Action {
  readonly type = CoursesActionTypes.Edit;

  constructor(public payload: Course) {}
}

export type CoursesActionsUnion =
  | Add
  | Remove
  | Edit
  | Get
  | GetSuccess;
