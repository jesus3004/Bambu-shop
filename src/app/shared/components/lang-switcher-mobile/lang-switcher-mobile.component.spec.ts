import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangSwitcherMobileComponent } from './lang-switcher-mobile.component';

describe('LangSwitcherMobileComponent', () => {
  let component: LangSwitcherMobileComponent;
  let fixture: ComponentFixture<LangSwitcherMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LangSwitcherMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangSwitcherMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
