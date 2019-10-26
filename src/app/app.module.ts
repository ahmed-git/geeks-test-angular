import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentLayoutComponent } from './components/parent-layout/parent-layout.component';
import { TypageAttributesComponent } from './components/typage-attributes/typage-attributes.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TypageAttributesItemComponent } from './components/typage-attributes-item/typage-attributes-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentLayoutComponent,
    TypageAttributesComponent,
    TypageAttributesItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
