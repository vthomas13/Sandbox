import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Sandbox';
  date: Date;
  constructor() {
    this.tick();
  }
  tick() {
    setInterval(() => { this.date = new Date() }, 1000);
  }

}
