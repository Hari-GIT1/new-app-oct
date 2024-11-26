import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CresteUserComponent } from './creste-user.component';

describe('CresteUserComponent', () => {
  let component: CresteUserComponent;
  let fixture: ComponentFixture<CresteUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CresteUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CresteUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
