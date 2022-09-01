import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/components/shared.module';

import { RentBookComponent } from './rent-book.component';

describe('RentBookComponent', () => {
  let component: RentBookComponent;
  let fixture: ComponentFixture<RentBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RentBookComponent],
      imports: [
        SharedModule,
        RouterTestingModule
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RentBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
