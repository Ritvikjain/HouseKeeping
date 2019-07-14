import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetworkerComponent } from './getworker.component';

describe('GetworkerComponent', () => {
  let component: GetworkerComponent;
  let fixture: ComponentFixture<GetworkerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetworkerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
