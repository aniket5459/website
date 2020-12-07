import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { BackendService } from './backend.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'website';
  flag: boolean = false;
  showLoginForm: boolean = false;
  constructor(private _router:Router,public _service:BackendService){}
  clickf(){
    this._router.navigate(['home']);  
    }

  toggle() {
    this.flag = !this.flag;
    if (this.flag) {
      this._router.navigateByUrl('/register');
    } else {
      this._router.navigateByUrl('');
    }
  }

  show() {
    this.showLoginForm = !this.showLoginForm;
    if (this.showLoginForm) {
      this._router.navigateByUrl('/login');
    } else {
      this._router.navigateByUrl('');
    }
  }

  logOut() {
    this._service.loggedOut();
    this._router.navigateByUrl('');
    this.showLoginForm = !this.showLoginForm;
  }
}

