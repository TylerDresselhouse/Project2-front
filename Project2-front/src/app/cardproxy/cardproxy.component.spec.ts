import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardproxyComponent } from './cardproxy.component';

describe('CardproxyComponent', () => {
  let component: CardproxyComponent;
  let fixture: ComponentFixture<CardproxyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardproxyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardproxyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
