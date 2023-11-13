import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardsServicosComponent } from './cards-servicos.component';

describe('CardsServicosComponent', () => {
  let component: CardsServicosComponent;
  let fixture: ComponentFixture<CardsServicosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsServicosComponent]
    });
    fixture = TestBed.createComponent(CardsServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
