import { Component, OnInit } from '@angular/core';
import { Circle, Stroke } from 'angular-svg';
@Component({
  selector: 'app-svg-viewer',
  templateUrl: './svg-viewer.component.html',
  styleUrls: ['./svg-viewer.component.css']
})
export class SVGViewerComponent implements OnInit {
 
  stroke: Stroke;
  colorstroke: Stroke;
  circle:Circle;
  constructor() { 
    this.stroke = new Stroke();
   
  }
  
  ngOnInit() {
    this.circle = { cx: 50, cy: 50, r: 10, stroke: this.colorstroke };

  }

}
