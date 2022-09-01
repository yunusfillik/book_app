import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareBookComponent } from './share-book.component';

describe('ShareBookComponent', () => {
  let component: ShareBookComponent;
  let fixture: ComponentFixture<ShareBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
