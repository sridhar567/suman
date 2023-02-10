import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public blogData: Array<{image: string, title:string, description: string}> = [
    {
      image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      title: 'Lorem ipsum dolor',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      title: 'Lorem ipsum dolor',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },{
      image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      title: 'Lorem ipsum dolor',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    },
    {
      image: 'https://mdbcdn.b-cdn.net/img/new/avatars/2.webp',
      title: 'Lorem ipsum dolor',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
