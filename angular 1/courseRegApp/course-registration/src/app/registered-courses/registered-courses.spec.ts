import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredCourses } from './registered-courses';

describe('RegisteredCourses', () => {
  let component: RegisteredCourses;
  let fixture: ComponentFixture<RegisteredCourses>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisteredCourses]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisteredCourses);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
