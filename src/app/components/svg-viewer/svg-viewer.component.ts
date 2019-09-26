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
    // this.circle = { cx: 50, cy: 50, r: 10, stroke: this.colorstroke };
    
    
    


  }
  MovePoint(event){
    let clientRect = event.target.getBoundingClientRect();
    let x = clientRect.left; //x position within the element.
    let y = clientRect.top;  //y position within the element.
    let Cx=event.clientX-x ;
    let Cy=event.clientY-y;
    let SCx=Cx.toString()
    let SCy=Cy.toString()
    document.querySelector('circle').setAttribute("cx",SCx);
    document.querySelector('circle').setAttribute("cy",SCy);
    console.log("X",event.clientX,"Y",event.clientY);
    console.log("clientx",event.clientX,"clienty",event.clientY);
    console.log("cX",Cx.toString(),"cY",Cy.toString());
    console.log("cx",Cx);

    
    
  }

}
