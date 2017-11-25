import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  genders = ['Male','Female'];
  signUpForm: FormGroup;
  forbiddenUsername = ['Chris','Anna'];

  ngOnInit(){
    var self = this;
    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null,[Validators.required, self.forbiddenNames.bind(self)]),
        'email': new FormControl(null,[Validators.required,Validators.email],[this.forbiddenEmails])
      }),
      'gender': new FormControl('Male'),
      'hobbies': new FormArray([])
    });
  }

  onSubmit(){
    console.log(this.signUpForm);
  }

  onHobbyAdd(){
    const control = new FormControl(null,Validators.required);
    (<FormArray>this.signUpForm.get('hobbies')).push(control);
  }

  forbiddenNames(control: FormControl): {[s: string]: boolean}{
    if(this.forbiddenUsername.indexOf(control.value) >= 0){
      return { 'forbiddenName' : true };
    }
    return null;
  }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if(control.value === "nandeeshpatelgp@gmail.com"){
          resolve({
            'emailForbidden':true
          });
        }else {
          resolve(null);
        }
      },2000);
    });
    return promise;
  }
}
