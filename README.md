# Angular-SVG

1.Install SVG with npm 

`npm install angular-svg` 

2.Go to app.modules.ts and add

`import { SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule } from 'angular-svg'`

3.Inject it at NgModules

`@NgModule({
  imports: [BrowserModule, FormsModule, SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule]})`

4.Go to Component.html 

` <svg >
    <g svg-circle [circle]="circle"></g></svg>`
    
5.Go to component.ts 

`circle:Circle;
    this.circle = { cx: 50, cy: 50, r: 10, stroke: this.colorstroke };`




