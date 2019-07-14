import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocatetaskComponent } from './allocatetask.component';

describe('AllocatetaskComponent', () => {
  let component: AllocatetaskComponent;
  let fixture: ComponentFixture<AllocatetaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllocatetaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocatetaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
