import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViabilScreenComponent } from './viabil-screen.component';

describe('ViabilScreenComponent', () => {
  let component: ViabilScreenComponent;
  let fixture: ComponentFixture<ViabilScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViabilScreenComponent]
    });
    fixture = TestBed.createComponent(ViabilScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
