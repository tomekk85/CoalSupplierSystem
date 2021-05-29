import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrtableComponent } from './grtable.component';

describe('GrtableComponent', () => {
  let component: GrtableComponent;
  let fixture: ComponentFixture<GrtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrtableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
