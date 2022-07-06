import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOutOfStockComponent } from './dialog-out-of-stock.component';

describe('DialogOutOfStockComponent', () => {
  let component: DialogOutOfStockComponent;
  let fixture: ComponentFixture<DialogOutOfStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogOutOfStockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOutOfStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
