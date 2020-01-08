import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChirpTileComponent } from './chirp-tile.component';

describe('ChirpTileComponent', () => {
  let component: ChirpTileComponent;
  let fixture: ComponentFixture<ChirpTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChirpTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChirpTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
