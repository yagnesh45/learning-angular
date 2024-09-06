import { Component, OnDestroy, OnInit } from "@angular/core";
import { interval, Observable, Observer, Subscription } from "rxjs";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObsSubscription: Subscription;
  constructor() {}

  ngOnDestroy(): void {
    console.log("Destroying the subscriber here");
    this.firstObsSubscription.unsubscribe();
  }

  ngOnInit() {
    // this.firstObsSubscription = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });

    const customIntervalObserver = Observable.create(
      (observer: Observer<any>) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
        }, 1000);
      }
    );

    this.firstObsSubscription = customIntervalObserver.subscribe((data) => {
      console.log(data);
    });
  }
}
