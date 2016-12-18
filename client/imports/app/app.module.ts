// Main module
import { NgModule }       from '@angular/core';
// Standard module needed
import { BrowserModule }  from '@angular/platform-browser';
// Modules we will use
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
// Importing our App logic
import { AppCompo }       from './app.compo';

/* - - - IMPORTS - - - */

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppCompo ],
  bootstrap:    [ AppCompo ]
})
export class AppModule {}
