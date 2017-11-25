import {Component, OnInit} from '@angular/core';
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  user1activated: boolean = false;
  user2activated: boolean = false;

  constructor(private userService: UserService){}

  ngOnInit(){
    var self = this;
    this.userService.isActivated.subscribe(
      (id: number) => {
        if(+id === 1){
          self.user1activated = true;
        }
        if(+id === 2){
          self.user2activated = true;
        }
    });
  }
}
