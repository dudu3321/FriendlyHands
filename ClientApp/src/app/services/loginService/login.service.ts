import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginDialogData } from 'src/app/models/login-dialog-data';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }

  CheckLogin(userData: LoginDialogData): boolean {
    this.http.post('/api/accounts', userData).subscribe((value: boolean) => {
      return value;
    });
    return false;
  }
}
