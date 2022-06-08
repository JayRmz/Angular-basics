import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  messages: any;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.messages = this.dataService.getPosts();
    // .subscribe(posts => {
    //   console.log(posts);
    //   this.messages = posts;
    // })
  }

  listensClick(id: number) {
    console.log('Click on: ', id)
  }

}
