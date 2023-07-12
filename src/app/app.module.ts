import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PasswordFormComponent } from './password-form.component';
import { PasswordStrengthMeterComponent } from './password-strength-meter.component';

@NgModule({
  declarations: [
    AppComponent,
    PasswordFormComponent,
    PasswordStrengthMeterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
