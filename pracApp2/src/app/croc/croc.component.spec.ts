import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrocComponent } from './croc.component';

describe('CrocComponent', () => {
  let component: CrocComponent;
  let fixture: ComponentFixture<CrocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
