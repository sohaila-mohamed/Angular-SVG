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
  MovePoint(event){
    let clientRect = event.target.getBoundingClientRect();
    let x = clientRect.left; //x position within the element.
    let y = clientRect.top;  //y position within the element.
    let cx=event.clientX-x ;
    let cy=event.clientY-y;
    this.circle = { cx: cx, cy: cy, r: 10, stroke: this.colorstroke };
   console.log("X",event.clientX,"Y",event.clientY);
   console.log("clientx",event.clientX,"clienty",event.clientY);
   console.log("cX",cx,"cY",cy);

    
    
  }

}
