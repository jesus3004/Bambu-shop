import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SherchComponent } from './sherch.component';

describe('SherchComponent', () => {
  let component: SherchComponent;
  let fixture: ComponentFixture<SherchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SherchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SherchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
