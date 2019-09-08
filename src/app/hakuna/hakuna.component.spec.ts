import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HakunaComponent } from './hakuna.component';

describe('HakunaComponent', () => {
  let component: HakunaComponent;
  let fixture: ComponentFixture<HakunaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HakunaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HakunaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
