import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {

  private _registerUrl = 'https://node-api-2start.herokuapp.com/register';
  private _loginUrl = 'https://node-api-2start.herokuapp.com/login';
  public pseudo = '';
  constructor(private http: HttpClient) {
    if (localStorage.getItem('pseudo')) {
      this.setCurrentUser(localStorage.getItem('pseudo'));
    }
  }

  register(user): Observable<any> {
    return this.http.post<any>(this._registerUrl, user);
  }

  login(user): Observable<any> {
    return this.http.post<any>(this._loginUrl, user);
  }

  isLoggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('pseudo');
  }

  setCurrentUser(pseudo: string) {
    this.pseudo = pseudo;
  }
}
