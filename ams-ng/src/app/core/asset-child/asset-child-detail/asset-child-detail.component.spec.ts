import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetChildDetailComponent } from './asset-child-detail.component';

describe('AssetChildDetailComponent', () => {
  let component: AssetChildDetailComponent;
  let fixture: ComponentFixture<AssetChildDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetChildDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetChildDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});