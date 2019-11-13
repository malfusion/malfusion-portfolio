import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandLinkComponent } from './brand-link.component';

describe('BrandLinkComponent', () => {
  let component: BrandLinkComponent;
  let fixture: ComponentFixture<BrandLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
