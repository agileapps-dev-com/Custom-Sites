import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private http: HttpClient) { }
  /**
   * Get the user info from the server
   */
  public getUserInfo(): Observable<any> {
    return this.http.get('/networking/rest/user/info?alt=json');
  }
}
