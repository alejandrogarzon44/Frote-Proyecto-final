import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolsosComponent } from './bolsos.component';

describe('BolsosComponent', () => {
  let component: BolsosComponent;
  let fixture: ComponentFixture<BolsosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BolsosComponent]
    });
    fixture = TestBed.createComponent(BolsosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
