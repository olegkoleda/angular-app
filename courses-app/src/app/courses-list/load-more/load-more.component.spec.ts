import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadMoreComponent } from './load-more.component';
import { By } from '@angular/platform-browser';

describe('LoadMoreComponent', () => {
  let component: LoadMoreComponent;
  let fixture: ComponentFixture<LoadMoreComponent>;

  let logLoadMoreSpy;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadMoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadMoreComponent);
    component = fixture.componentInstance;
    logLoadMoreSpy = spyOn(component, 'logLoadMore');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log by clicking load more button', () => {
    const deleteButton = fixture.debugElement.query(By.css('.courses--load-more button'));
    deleteButton.triggerEventHandler('click', null);
    expect(logLoadMoreSpy).toHaveBeenCalled();
  });
});

describe('LoadMoreComponent test as class', () => {
  let sut: LoadMoreComponent;
  let deleteMethodSpy;

  beforeEach(() => {
    sut = new LoadMoreComponent();
    deleteMethodSpy = spyOn(sut, 'logLoadMore');
  });

  describe('Test method', () => {
    it('should call deleteCourse method', () => {
      sut.logLoadMore();
      expect(deleteMethodSpy).toHaveBeenCalled();
    });
  });
});
