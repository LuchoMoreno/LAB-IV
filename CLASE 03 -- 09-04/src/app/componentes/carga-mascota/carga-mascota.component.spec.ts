import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CargaMascotaComponent } from './carga-mascota.component';

describe('CargaMascotaComponent', () => {
  let component: CargaMascotaComponent;
  let fixture: ComponentFixture<CargaMascotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CargaMascotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CargaMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
