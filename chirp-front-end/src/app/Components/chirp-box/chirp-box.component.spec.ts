import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpBoxComponent } from './chirp-box.component';

describe('ChirpBoxComponent', () => {
  let component: ChirpBoxComponent;
  let fixture: ComponentFixture<ChirpBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
