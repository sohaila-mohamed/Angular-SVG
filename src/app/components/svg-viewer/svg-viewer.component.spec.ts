import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SVGViewerComponent } from './svg-viewer.component';

describe('SVGViewerComponent', () => {
  let component: SVGViewerComponent;
  let fixture: ComponentFixture<SVGViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SVGViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SVGViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
