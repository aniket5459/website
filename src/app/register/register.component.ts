import { Component, OnInit } from '@angular/core';
import { BackendService } from "../backend.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private backend:BackendService) { }
  firstName:string;
  lastName:string;
  phone_no:number;
  address:string;
  email:string;
  password:string;
  success = false;
  failure = false;
  displayLoader = false;
  formData:any;


  ngOnInit(): void {}
  register(data) {
    this.formData = data.value;
    this.displayLoader = true;
    this.backend.register(this.formData).subscribe(res => {
      this.displayLoader = false;
      if (res.status == 200) {
        this.success = true;
      } else {
        this.failure = true;
      }
      
    });

    data.reset();
  }
  removeAlert() {
    var element = document.getElementById("alert");
    element.remove();
  }

}
