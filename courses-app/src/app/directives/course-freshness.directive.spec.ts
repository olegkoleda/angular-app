import { CourseFreshnessDirective } from './course-freshness.directive';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { CoursesListItemComponent } from '../courses-list/courses-list-item/courses-list-item.component';
import { NO_ERRORS_SCHEMA, Component, Renderer2 } from '@angular/core';

@Component({
    template: `
    <div [appCourseFreshness]="freshDate"></div>
    <div [appCourseFreshness]="upcomingDate"></div>
    <div [appCourseFreshness]="pastDate"></div>
    `
  })

  class TestHostComponent {
    public freshDate: Date = new Date(new Date().setDate(new Date().getDate() - 1));
    public upcomingDate: Date = new Date(new Date().setDate(new Date().getDate() + 1));
    public pastDate: Date = new Date(new Date().setDate(new Date().getDate() - 15));
  }

  describe('CourseFreshness directive testing test-host', () => {
    let testHost: TestHostComponent;
    let fixture: ComponentFixture<TestHostComponent>;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [TestHostComponent, CourseFreshnessDirective]
      })
      .compileComponents();
    }));

    beforeEach(() => {
      fixture = TestBed.createComponent(TestHostComponent);
      testHost = fixture.componentInstance;
      fixture.detectChanges();
    });


      it('should create', () => {
          console.log(fixture);
          expect(testHost).toBeTruthy();
      });
      it('should set correct class (fresh / upcoming / "")', () => {
        const freshDiv: string = fixture.nativeElement.firstChild.classList.value;
        const upcomingDiv: string = fixture.nativeElement.firstChild.nextSibling.classList.value;
        const pastDiv: number = fixture.nativeElement.lastChild.classList.length;
        // const bgColor = h2.style.backgroundColor;
        expect(freshDiv).toEqual('fresh');
        expect(upcomingDiv).toEqual('upcoming');
        expect(pastDiv).toEqual(0);
        console.log(freshDiv);
      });
// });
  });
