import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private decodedToken: any;
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient) {}

  register(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/register', userData);
  }

  login(userData: any): Observable<any> {
    return this.http.post('/api/v1/users/login', userData).pipe(
      map((token: string) => {
        return this.saveToken(token);
      })
    );
  }

  logout() {
    localStorage.removeItem('booker_auth');
    localStorage.removeItem('booker_meta');
    this.decodedToken = null;
  }

  private saveToken(token: string): string {
    this.decodedToken = this.jwtHelper.decodeToken(token);
    localStorage.setItem('booker_auth', token);
    localStorage.setItem('booker_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('booker_auth');
    // console.log(token);
    // console.log(this.jwtHelper.isTokenExpired(token));
    // console.log(this.jwtHelper.getTokenExpirationDate(token));
    return this.jwtHelper.isTokenExpired(token);
  }

  getUsername(): string {
    this.decodedToken = JSON.parse(localStorage.getItem('booker_meta'));
    // console.log(this.decodedToken);
    return this.decodedToken.username;
  }

  getToken(): string {
    return localStorage.getItem('booker_auth');
  }
}
