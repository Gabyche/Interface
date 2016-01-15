import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'product',
  template: `
  <h1>{{ id }}</h1>
  <ul>
      <li>
      Name : {{name}}
    </li>
    <li>
      Description : {{description}}
    </li>
  </ul>

    <div><label>id: </label>{{id}}</div>
    <div>
      <label>name: </label>
      <div><input [(ngModel)]="name" placeholder="name"></div>
    </div>
  `
})
class Product {
  id: number;
  name: string;
  description: string;

  constructor() {
    this.id = 1;
    this.name = '';
    this.description = 'Super Framework'
  }
}


bootstrap(Product);
