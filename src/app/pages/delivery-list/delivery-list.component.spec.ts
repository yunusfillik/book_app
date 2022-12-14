import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/components/shared.module';

import { DeliveryListComponent } from './delivery-list.component';

describe('DeliveryListComponent', () => {
  let component: DeliveryListComponent;
  let fixture: ComponentFixture<DeliveryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliveryListComponent ],
      imports: [
        SharedModule,
        RouterTestingModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeliveryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
