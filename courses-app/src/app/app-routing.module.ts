import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { NotExistingPageComponent } from './not-existing-page/not-existing-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'courses', pathMatch: 'full' },
  { path: 'login', component: LoginPageComponent },
  { path: 'courses', component: CoursesListComponent },
  { path: 'courses/new', component: AddPageComponent },
  { path: 'courses/:id', component: AddPageComponent },
      /// 404
    { path: '**', component: NotExistingPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
