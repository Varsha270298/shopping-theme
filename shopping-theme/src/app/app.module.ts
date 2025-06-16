import { CommonModule } from '@angular/common';import { HttpClientModule } from '@angular/common/http';import { BrowserAnimationsModule } from '@angular/platform-browser/animations';import { CommonComponentsModule } from './common-components/common-components.module'; import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { TagModule } from 'primeng/tag';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    LayoutComponent,
    LoginComponent
  ],
  imports: [ 
    CommonComponentsModule,CarouselModule,ButtonModule,ToastModule
    ,HttpClientModule,BrowserAnimationsModule, BrowserModule,TagModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
