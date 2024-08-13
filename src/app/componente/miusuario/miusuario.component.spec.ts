import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiusuarioComponent } from './miusuario.component';

describe('MiusuarioComponent', () => {
  let component: MiusuarioComponent;
  let fixture: ComponentFixture<MiusuarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MiusuarioComponent]
    });
    fixture = TestBed.createComponent(MiusuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
