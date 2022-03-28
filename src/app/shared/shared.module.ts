import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  exports:[
    CommonModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule
  ]
})
export class SharedModule { }
