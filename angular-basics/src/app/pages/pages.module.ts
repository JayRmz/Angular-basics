import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from "./about/about.component";
import {ContactComponent} from "./contact/contact.component";
import {HomeComponent} from "./home/home.component";



@NgModule({
  declarations: [
    AboutComponent,
    ContactComponent,
    HomeComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
