import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoupasFormComponent } from './roupas-form.component';


describe('RoupasFormComponent', () => {
  let component: RoupasFormComponent;
  let fixture: ComponentFixture<RoupasFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoupasFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoupasFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
