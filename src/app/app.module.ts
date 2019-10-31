import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentLayoutComponent } from './components/parent-layout/parent-layout.component';
import { TypageAttributesComponent } from './components/typage-attributes/typage-attributes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TypageAttributesItemComponent } from './components/typage-attributes-item/typage-attributes-item.component';
import { MatListModule } from '@angular/material/list'; 
import { MatExpansionModule } from '@angular/material/expansion';
import { AutofocusDirective } from './autofocus.directive'; 


@NgModule({
  declarations: [
    AppComponent,
    ParentLayoutComponent,
    TypageAttributesComponent,
    TypageAttributesItemComponent,
    AutofocusDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatListModule,
    MatExpansionModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
