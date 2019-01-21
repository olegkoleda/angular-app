import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesControlsComponent } from './courses-controls.component';
import { FormsModule } from '@angular/forms';
import { newEvent } from 'src/testing';
import { By } from '@angular/platform-browser';

describe('CoursesControlsComponent', () => {
  let component: CoursesControlsComponent;
  let fixture: ComponentFixture<CoursesControlsComponent>;

  let logSearchValueSpy;


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
    logSearchValueSpy = spyOn(component, 'logSearchValue');
    fixture.detectChanges();
  });

  it('should create and have empty value', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(component).toBeTruthy();
    expect(compiled.querySelector('input').value).toBe('');
  });

  it('bind to component works', () => {
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('input').value = 'test';
    compiled.querySelector('input').dispatchEvent(newEvent('input'));
    fixture.detectChanges();
    expect(component.value).toEqual('test');
  });

  it('should be called logSearchValue method', () => {
    const deleteButton = fixture.debugElement.query(By.css('.courses-controls--search button'));
    deleteButton.triggerEventHandler('click', null);
    expect(logSearchValueSpy).toHaveBeenCalled();
  });
});
