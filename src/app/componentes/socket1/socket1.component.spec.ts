import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Socket1Component } from './socket1.component';

describe('Socket1Component', () => {
  let component: Socket1Component;
  let fixture: ComponentFixture<Socket1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Socket1Component]
    });
    fixture = TestBed.createComponent(Socket1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
