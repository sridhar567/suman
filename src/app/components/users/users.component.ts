import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: Array<{profile:string, name:string, designation:string}> = [
    {
      profile: 'https://mdbcdn.b-cdn.net/img/new/avatars/6.webp',
      name: 'Lorem Ipsum',
      designation: 'consectetur adipiscing'
    },{
      profile: 'https://mdbcdn.b-cdn.net/img/new/avatars/4.webp',
      name: 'Lorem Ipsum',
      designation: 'consectetur adipiscing'
    },
    {
      profile: 'https://mdbcdn.b-cdn.net/img/new/avatars/9.webp',
      name: 'Lorem Ipsum',
      designation: 'consectetur adipiscing'
    },{
      profile: 'https://mdbcdn.b-cdn.net/img/new/avatars/11.webp',
      name: 'Lorem Ipsum',
      designation: 'consectetur adipiscing'
    },{
      profile: 'https://mdbcdn.b-cdn.net/img/new/avatars/18.webp',
      name: 'Lorem Ipsum',
      designation: 'consectetur adipiscing'
    },
    {
      profile: 'https://mdbcdn.b-cdn.net/img/new/avatars/16.webp',
      name: 'Lorem Ipsum',
      designation: 'consectetur adipiscing'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
