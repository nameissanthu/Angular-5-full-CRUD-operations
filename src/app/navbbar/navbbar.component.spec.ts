import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbbarComponent } from './navbbar.component';

describe('NavbbarComponent', () => {
  let component: NavbbarComponent;
  let fixture: ComponentFixture<NavbbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
