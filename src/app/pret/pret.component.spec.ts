import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretComponent } from './pret.component';

describe('PretComponent', () => {
  let component: PretComponent;
  let fixture: ComponentFixture<PretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PretComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
