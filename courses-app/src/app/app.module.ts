import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { CoursesListItemComponent } from './courses-list/courses-list-item/courses-list-item.component';
import { CoursesControlsComponent } from './courses-list/courses-controls/courses-controls.component';
import { BreadcrumbsComponent } from './header/breadcrumbs/breadcrumbs.component';
import { LoadMoreComponent } from './courses-list/load-more/load-more.component';
import { CourseFreshnessDirective } from './directives/course-freshness.directive';
import { CourseDurationPipe } from './pipes/course-duration.pipe';
import { CoursesSortPipe } from './pipes/courses-sort.pipe';
import { CoursesFilterPipe } from './pipes/courses-filter.pipe';
import { LoginPageComponent } from './login-page/login-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { NotExistingPageComponent } from './not-existing-page/not-existing-page.component';
import { AuthInterceptor } from './comon/authInterceptor';
import { SpinnerComponent } from './spinner/spinner.component';
import { FormDateComponent } from './add-page/form-date/form-date.component';
import { FormDurationComponent } from './add-page/form-duration/form-duration.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects';
import { CoursesEffects } from './effects/courses.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CoursesListComponent,
    CoursesListItemComponent,
    CoursesControlsComponent,
    BreadcrumbsComponent,
    LoadMoreComponent,
    CourseFreshnessDirective,
    CourseDurationPipe,
    CoursesSortPipe,
    CoursesFilterPipe,
    LoginPageComponent,
    AddPageComponent,
    NotExistingPageComponent,
    SpinnerComponent,
    FormDateComponent,
    FormDurationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AuthEffects, CoursesEffects])
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
