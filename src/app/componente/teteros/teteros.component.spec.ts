import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeterosComponent } from './teteros.component';

describe('TeterosComponent', () => {
  let component: TeterosComponent;
  let fixture: ComponentFixture<TeterosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeterosComponent]
    });
    fixture = TestBed.createComponent(TeterosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
