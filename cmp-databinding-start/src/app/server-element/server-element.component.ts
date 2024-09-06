import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"],
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input("srvElement")
  element: { type: string; name: string; content: string };

  @ViewChild("heading", { static: true }) serverHeading: ElementRef;
  @ContentChild("contentParagraph", { static: true })
  paragraphContent: ElementRef;

  constructor() {
    console.log("Constructor");
  }

  ngOnInit(): void {
    console.log("NgOnInit()");
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("NgOnChanges()");
    console.log(changes);
  }

  ngDoCheck() {
    console.log("onDoCheck()");
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit()");
    console.log(
      "Paragraph Content: " + this.paragraphContent.nativeElement.textContent
    );
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked()");
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit()");
    console.log("Header:" + this.serverHeading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked()");
  }

  ngOnDestroy() {
    console.log("ngOnDestroy()");
  }
}
