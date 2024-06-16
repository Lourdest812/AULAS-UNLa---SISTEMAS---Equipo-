import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import NgPrime
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


@NgModule({ declarations: [
        AppComponent,
    ],
    bootstrap: [AppComponent], imports: [BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        ReactiveFormsModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule { }
