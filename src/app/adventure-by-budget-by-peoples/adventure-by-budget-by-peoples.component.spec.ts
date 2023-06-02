import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventureByBudgetByPeoplesComponent } from './adventure-by-budget-by-peoples.component';

describe('AdventureByBudgetByPeoplesComponent', () => {
  let component: AdventureByBudgetByPeoplesComponent;
  let fixture: ComponentFixture<AdventureByBudgetByPeoplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventureByBudgetByPeoplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventureByBudgetByPeoplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
