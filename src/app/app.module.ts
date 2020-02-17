import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CalzadoComponent } from './calzado/calzado.component';

//service
import { HttpClientModule } from '@angular/common/http';
import { CalzadoService } from './service/calzado.service';


@NgModule({
  declarations: [
    AppComponent,
    CalzadoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CalzadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
