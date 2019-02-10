import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { NotExistingPageComponent } from './not-existing-page/not-existing-page.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent, data: { breadcrumb: 'login' } },
  { path: 'courses', component: CoursesListComponent, data: { breadcrumb: 'All courses' }, canActivate: [AuthGuardGuard] },
  { path: 'courses/new', component: AddPageComponent, data: { breadcrumb: 'Add course' }, canActivate: [AuthGuardGuard] },
  { path: 'courses/:id', component: AddPageComponent, data: { breadcrumb: 'Edit ' }, canActivate: [AuthGuardGuard] },
      /// 404
    { path: '**', component: NotExistingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
