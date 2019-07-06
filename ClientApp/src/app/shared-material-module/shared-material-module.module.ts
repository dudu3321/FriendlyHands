import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule, MatToolbarModule, MatSlideToggleModule
  , MatButtonModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginDialogComponent } from '../components/dialogs/login-dialog/login-dialog.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatDialogModule,
  ],
  exports: [
    MatButtonModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSlideToggleModule,
    MatFormFieldModule
  ],
  entryComponents:[
    LoginDialogComponent
  ],
})
export class SharedMaterialModuleModule { }
