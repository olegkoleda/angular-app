import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesControlsComponent } from './courses-controls.component';
import { FormsModule } from '@angular/forms';
import { newEvent } from 'src/testing';

describe('CoursesControlsComponent', () => {
  let component: CoursesControlsComponent;
  let fixture: ComponentFixture<CoursesControlsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesControlsComponent ],
      imports: [ FormsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and have emty value', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(component).toBeTruthy();
    expect(compiled.querySelector('input').value).toBe('');
  });

  // it('bind from component works', () => {
  //   component.value = 'test';
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('input').value).toEqual('test');
  // });

  it('bind to component works', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = 'test';
    compiled.querySelector('input').dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    expect(component.value).toEqual('test');
  });
});
