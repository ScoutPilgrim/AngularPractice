import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KekComponent } from './kek.component';

describe('KekComponent', () => {
  let component: KekComponent;
  let fixture: ComponentFixture<KekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
