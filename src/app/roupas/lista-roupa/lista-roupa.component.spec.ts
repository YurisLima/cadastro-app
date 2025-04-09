import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaRoupaComponent } from './lista-roupa.component';

describe('ListaRoupaComponent', () => {
  let component: ListaRoupaComponent;
  let fixture: ComponentFixture<ListaRoupaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaRoupaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaRoupaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
