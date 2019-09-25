# Angular-SVG

## Setup

`npm install angular-svg` 

## Usage

`import { SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule } from 'angular-svg'`

## Modules List

`@NgModule({
  imports: [BrowserModule, FormsModule, SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule]})`

## In HTML 

` <svg >
    <g svg-circle [circle]="circle"></g></svg>`

## In Typescript 

`circle:Circle;
    this.circle = { cx: 50, cy: 50, r: 10, stroke: this.colorstroke };`




