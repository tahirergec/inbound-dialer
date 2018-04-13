import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DidComponent } from './did.component';

describe('DidComponent', () => {
  let component: DidComponent;
  let fixture: ComponentFixture<DidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
