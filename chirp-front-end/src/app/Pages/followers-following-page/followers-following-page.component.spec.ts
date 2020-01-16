import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowersFollowingPageComponent } from './followers-following-page.component';

describe('FollowersFollowingPageComponent', () => {
  let component: FollowersFollowingPageComponent;
  let fixture: ComponentFixture<FollowersFollowingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowersFollowingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowersFollowingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
