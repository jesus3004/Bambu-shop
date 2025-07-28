import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCarComponent } from './product-car.component';

describe('ProductCarComponent', () => {
  let component: ProductCarComponent;
  let fixture: ComponentFixture<ProductCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
