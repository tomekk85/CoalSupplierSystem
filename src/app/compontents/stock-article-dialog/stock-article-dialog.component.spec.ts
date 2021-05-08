import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockArticleDialogComponent } from './stock-article-dialog.component';

describe('StockArticleDialogComponent', () => {
  let component: StockArticleDialogComponent;
  let fixture: ComponentFixture<StockArticleDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockArticleDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockArticleDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
