import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public cartsData: Array<{icon: string, count: number, title: string}> = [{
    icon: 'shopping_cart',
    count: 345,
    title: 'Total orders'
  },
{
  icon: 'sensor_door',
  count: 267,
  title: 'Total expenses'
},
{
  icon: 'bar_chart',
  count: 345,
  title: 'Total revenue'
}, {
  icon: 'person',
  count: 345,
  title: 'New users'
}];

public recentBlogs: Array<{image: string, heading: string, description: string}> = [
  {
    image: 'https://mdbcdn.b-cdn.net/img/new/avatars/14.webp',
    heading: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },{
    image: 'https://mdbcdn.b-cdn.net/img/new/avatars/25.webp',
    heading: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },{
    image: 'https://mdbcdn.b-cdn.net/img/new/avatars/15.webp',
    heading: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },{
    image: 'https://mdbcdn.b-cdn.net/img/new/avatars/22.webp',
    heading: 'Lorem ipsum dolor sit amet',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  }
]

  ngOnInit() {
  }

}
