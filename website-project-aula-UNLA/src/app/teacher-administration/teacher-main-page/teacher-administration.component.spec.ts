import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherAdministrationComponent } from './teacher-administration.component';

describe('TeacherAdministrationComponent', () => {
  let component: TeacherAdministrationComponent;
  let fixture: ComponentFixture<TeacherAdministrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TeacherAdministrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
