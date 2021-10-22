import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecentacionComponent } from './precentacion.component';

describe('PrecentacionComponent', () => {
  let component: PrecentacionComponent;
  let fixture: ComponentFixture<PrecentacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecentacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrecentacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
