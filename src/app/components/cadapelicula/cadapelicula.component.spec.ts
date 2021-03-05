import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadapeliculaComponent } from './cadapelicula.component';

describe('CadapeliculaComponent', () => {
  let component: CadapeliculaComponent;
  let fixture: ComponentFixture<CadapeliculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadapeliculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadapeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
