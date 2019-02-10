import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPageComponent } from './add-page.component';
import { FormsModule } from '@angular/forms';
import { CourseDurationPipe } from '../pipes/course-duration.pipe';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

describe('AddPageComponent', () => {
  let component: AddPageComponent;
  let fixture: ComponentFixture<AddPageComponent>;
  const routerSpy = jasmine.createSpyObj('Router', ['navigateByUrl']);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPageComponent, CourseDurationPipe ],
      providers: [
        { provide: Router, useValue: routerSpy },
        {  provide: ActivatedRoute, useValue: {snapshot: {params: {'id': '1'}}} },
      ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
