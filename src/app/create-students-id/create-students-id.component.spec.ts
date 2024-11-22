import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStudentsIDComponent } from './create-students-id.component';

describe('CreateStudentsIDComponent', () => {
  let component: CreateStudentsIDComponent;
  let fixture: ComponentFixture<CreateStudentsIDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateStudentsIDComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStudentsIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
