import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseGrComponent } from './warehouse-gr.component';

describe('WarehouseGrComponent', () => {
  let component: WarehouseGrComponent;
  let fixture: ComponentFixture<WarehouseGrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WarehouseGrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseGrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
