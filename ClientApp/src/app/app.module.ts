import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedMaterialModuleModule } from './shared-material-module/shared-material-module.module';
import { LoginDialogComponent } from './components/dialogs/login-dialog/login-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatFormFieldControl } from '@angular/material';
import { SignUpDialogComponent } from './components/dialogs/sign-up-dialog/sign-up-dialog.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginService } from './services/loginService/login.service';
import { AgmCoreModule } from '@agm/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { GoogleMapDrawerComponent } from './components/google-map-drawer/google-map-drawer.component';
import { LocationFilterComponent } from './components/location-filter/location-filter.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    ToolbarComponent,
    SignUpDialogComponent,
    MainComponent,
    GoogleMapDrawerComponent,
    LocationFilterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedMaterialModuleModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCvtv3ZX189rPtiJkmf2M63FVZlwiwd02k'
    }),
    FlexLayoutModule
  ],
  providers: [
    {
      provide: MAT_DIALOG_DEFAULT_OPTIONS,
      useValue: { hasBackdrop: true }
    },
    LoginService,
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
