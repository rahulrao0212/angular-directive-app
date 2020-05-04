import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-app';
  names: string[] = [
    'rahul',
    'bikash',
    'sai'
  ];

  num: number = 0;

  items: item[] = [{name: 'One', val: 1}, {name: 'Two', val: 2}, {name: 'Three', val: 3}];
  selectedValue: string= 'One';

  showMe: boolean;
}


class item {
  name: string;
  val: number;
}
