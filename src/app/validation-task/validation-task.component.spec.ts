import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationTaskComponent } from './validation-task.component';

describe('ValidationTaskComponent', () => {
  let component: ValidationTaskComponent;
  let fixture: ComponentFixture<ValidationTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidationTaskComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidationTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
