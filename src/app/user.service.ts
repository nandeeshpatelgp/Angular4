import {Subject} from "rxjs/Subject";

export class UserService{
  isActivated = new Subject();
}
