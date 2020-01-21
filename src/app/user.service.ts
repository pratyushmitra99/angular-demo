import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { ToastrService } from 'ngx-toastr';
import { Subject, BehaviorSubject } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  // private emitChangeSource = new Subject<any>();
  // changeEmitted$ = this.emitChangeSource.asObservable();

  private messageSource = new BehaviorSubject("");
  currentMessage = this.messageSource.asObservable();

  // emitChange(data: string){
  //   this.emitChangeSource.next(data);
  // }

  constructor(
    private toastr: ToastrService
  ) { }

  changeMessage(message: string){
    this.messageSource.next(message);
  }

  login(sendData){
    console.log('getting data in service......',sendData);
    let email = sendData.email;
    let pswd = sendData.pswd;
    if(email == "pratyushmitra99@gmail.com" && pswd == "12345"){
      console.log('Login Succesful');
      let id = uuid();
      console.log('my id.....',id);
      localStorage.setItem("ID",id);

      return true;
    }
    else{
      console.log('invalid credentials');
      return false;
    }
  }

  alertForSuccess(message,title){
    this.toastr.success(message, title);
  }
  alertForWarning(message,title){
    this.toastr.warning(message, title);
  }
  alertFordanger(message,title){
    this.toastr.error(message, title);
  }
}
