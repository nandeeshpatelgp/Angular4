import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/Rx";
import {Observer} from "rxjs/Observer";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy{

  mySubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(2000)
      .map(
        ( data: number ) => {
          return "Number: " + data;
        }
      );
    this.mySubscription = myNumbers.subscribe(
      ( str: string) => {
        console.log(str);
      }
    );
    setTimeout(() => {
      this.mySubscription.unsubscribe();
    },10000);
    /*const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next("First Package");
      },2000);
      setTimeout(() => {
        observer.next("Second Package");
      },4000);
      setTimeout(() => {
        observer.error("Errored out!");
      },5000);
    });
    myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (data: string) => {
        console.error(data);
      },
      () => {
        console.log("Completed");
      }
    );*/
  }

  ngOnDestroy(){
    this.mySubscription.unsubscribe();
  }
}
