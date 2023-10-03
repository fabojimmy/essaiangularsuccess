import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaksComponent } from './staks.component';

describe('StaksComponent', () => {
  let component: StaksComponent;
  let fixture: ComponentFixture<StaksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StaksComponent]
    });
    fixture = TestBed.createComponent(StaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
