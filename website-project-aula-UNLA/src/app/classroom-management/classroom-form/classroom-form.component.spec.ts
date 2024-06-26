import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassroomFormComponent } from './classroom-form.component';

describe('ClassroomFormComponent', () => {
  let component: ClassroomFormComponent;
  let fixture: ComponentFixture<ClassroomFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassroomFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassroomFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
