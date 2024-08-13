import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonajerosComponent } from './sonajeros.component';

describe('SonajerosComponent', () => {
  let component: SonajerosComponent;
  let fixture: ComponentFixture<SonajerosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SonajerosComponent]
    });
    fixture = TestBed.createComponent(SonajerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
