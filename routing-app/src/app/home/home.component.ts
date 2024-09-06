import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickHandler() {
    const confirm = prompt('Do you really wanna go there?');

    if (confirm === 'yes') {
      this.router.navigate(['animals']);
    }
  }
}
