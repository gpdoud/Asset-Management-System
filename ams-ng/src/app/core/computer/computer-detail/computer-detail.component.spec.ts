import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerDetailComponent } from './computer-detail.component';

describe('ComputerDetailComponent', () => {
  let component: ComputerDetailComponent;
  let fixture: ComponentFixture<ComputerDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
