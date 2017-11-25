import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  projectForm: FormGroup;
  status = 'Critical';
  invalidProject = "Test";

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projName': new FormControl(null,[Validators.required],[this.projectInvalid]),
      'email': new FormControl(null,[Validators.required,Validators.email]),
      'status': new FormControl(null)
    });
  }

  projectInvalid(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === "Test"){
          resolve({'invalidProject': true});
        }else {
          resolve(null);
        }
      },3000)
    });
    return promise;
  }
}
