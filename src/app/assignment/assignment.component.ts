import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  @ViewChild('userForm') userForm: NgForm;

  prof = "advanced";
  user = {
    email: '',
    pwd: '',
    prof: ''
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    this.user.email = this.userForm.value.email;
    this.user.pwd = this.userForm.value.pwd;
    this.user.prof = this.userForm.value.prof;
  }

}
