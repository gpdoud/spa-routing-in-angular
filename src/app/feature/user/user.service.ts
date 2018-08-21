import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

const urlbase = "http://prs.doudsystems.com/Users/";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  list(): Observable<User[]> {
  	return this.http.get(urlbase+"List") as Observable<User[]>;
  }

  get(id): Observable<User> {
  	return this.http.get(urlbase+"Get/"+id) as Observable<User>;	
  }

  edit(user: User): Observable<string> {
    return this.http.post(urlbase+"Change", user) as Observable<string>;
  }

  constructor(
  	private http: HttpClient
  ) { }
}
