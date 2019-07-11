import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LoginDialogData } from '../../../models/login-dialog-data';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/loginService/login.service';
@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  data: LoginDialogData;
  loginError: boolean;

  constructor(public dialogRef: MatDialogRef<LoginDialogComponent>,
              private loginService: LoginService) {
    this.data = { SerialNo: 0, Email: '', Pass: '', UserName: '' };
    this.loginError = false;
  }

  ngOnInit() {
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
  onLoginClick(): void {
    if (this.loginService.CheckLogin(this.data)) {
    } else {
      this.data.Pass = '';
      this.loginError = true;
    }
  }
  onSignUpClick(): void {

  }
  onForgotClick(): void {
  }
}

