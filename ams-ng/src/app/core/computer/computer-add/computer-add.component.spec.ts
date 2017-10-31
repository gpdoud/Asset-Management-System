import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerAddComponent } from './computer-add.component';

describe('ComputerAddComponent', () => {
  let component: ComputerAddComponent;
  let fixture: ComponentFixture<ComputerAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
