import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetChildAddComponent } from './asset-child-add.component';

describe('AssetChildAddComponent', () => {
  let component: AssetChildAddComponent;
  let fixture: ComponentFixture<AssetChildAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetChildAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetChildAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});