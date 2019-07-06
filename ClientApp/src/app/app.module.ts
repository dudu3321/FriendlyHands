import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModuleModule } from './shared-material-module/shared-material-module.module';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedMaterialModuleModule,
    FormsModule
  ],
  providers: [{provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}],
  bootstrap: [AppComponent]
})
export class AppModule { }
