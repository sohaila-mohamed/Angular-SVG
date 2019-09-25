import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SVGViewerComponent } from './components/svg-viewer/svg-viewer.component';
import { SvgCircleModule, SvgLineModule, SvgPolygonModule, SvgPolylineModule, SvgTextModule, SvgPathModule, SvgEllipseModule } from 'angular-svg'

@NgModule({
  declarations: [
    AppComponent,
    SVGViewerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule, 
      SvgCircleModule, SvgLineModule,
       SvgPolygonModule, SvgPolylineModule, SvgTextModule,
        SvgPathModule, SvgEllipseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
