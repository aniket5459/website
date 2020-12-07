import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
import {Router} from "@angular/router"


@Injectable({
  providedIn: 'root'
})
export class BackendService {
  private registerUrl = "https://ionic-server-app.herokuapp.com/trainee/register";
  private loginUrl = "https://ionic-server-app.herokuapp.com/trainee/login";

  constructor(private http:HttpClient,private _router:Router) { }
  
  public register(formData): Observable<any> {
    return this.http
      .post(this.registerUrl, formData, { observe: "response" })
      .pipe(catchError(this.handleError));
  }
 
  public handleError(error: HttpErrorResponse) {
    return error.status.toString();
  }
  public login(formData):Observable<any>{
    return this.http
    .post(this.loginUrl, formData, { observe: "response" })
    .pipe(catchError(this.handleError));
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  loggedOut(){
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
    }
}
