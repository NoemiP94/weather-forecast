import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextforecastComponent } from './nextforecast.component';

describe('NextforecastComponent', () => {
  let component: NextforecastComponent;
  let fixture: ComponentFixture<NextforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NextforecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NextforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
