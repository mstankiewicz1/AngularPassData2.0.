import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  data = {
    name: 'Jan1',
    age: 20,
    email: 'jan@gmail.com'
  }
}
