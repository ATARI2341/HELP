import { NgModule,enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrecentacionComponent } from './precentacion/precentacion.component';
import { SliderComponent } from './slider/slider.component';
import {  NgbModule,NgbCarouselConfig  } from '@ng-bootstrap/ng-bootstrap';
import { RevistaComponent } from './revista/revista.component';
import { MateriasComponent } from './materias/materias/materias.component';

enableProdMode();
@NgModule({
  declarations: [
    AppComponent,
    PrecentacionComponent,    
    SliderComponent, RevistaComponent, MateriasComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,    
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent],
  exports: [SliderComponent]
})
export class AppModule { 
  
}
