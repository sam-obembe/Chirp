import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpFeedComponent } from './chirp-feed.component';

describe('ChirpFeedComponent', () => {
  let component: ChirpFeedComponent;
  let fixture: ComponentFixture<ChirpFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
