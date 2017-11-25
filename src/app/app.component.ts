import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('form') form: NgForm;
  title = 'app';
  qstn = "city";
  ans = '';
  genders = ['male','female'];
  user = {
    username: '',
    email: '',
    question: '',
    answer: '',
    gender: ''
  };

  /*onSubmit(form: NgForm){
    console.log(form);
  }*/

  onSubmit(){
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.question = this.form.value.secret;
    this.user.answer = this.form.value.ans;
    this.user.gender = this.form.value.gender;
    this.form.reset();
  }

  suggestUsername(){
    const username = "superUser";
    /*this.form.setValue({
      userData: {
        username: username,
        email: "nandeeshpatelgp@gmail.com"
      },
      secret: "city",
      ans: "Shimoga",
      gender: "male"
    });*/
    this.form.form.patchValue({
      userData:{
        username: "superValue"
      }
    });
  }
}
