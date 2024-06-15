/** Shared compoenent declare */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//shared compoennts
import { AppComponent } from './app.component';
import { SharedModule } from './components/shared.module';



@NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent],
  })
  export class AppModule { }