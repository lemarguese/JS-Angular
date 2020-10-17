import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppService } from '../services/app.service';
import { MainService } from '../services/main.service';
import { Post } from '../classes/post';
import { User } from '../classes/user';
import { Comment } from '../classes/comment';
import { Photo } from '../classes/photo';
import { DatePipe, formatDate, getLocaleDateTimeFormat } from '@angular/common';
import { LoginComponent } from '../components/login/login.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  users: User[];
  posts: Post[];
  comments: Comment[];
  photos: Photo[];
  show = false;
  post: string;
  isPublished = false;
  date: Date;
  newPost: string;
  comment = false;
  newComment: string;
  newComments = [];
  ngOnInit(): void {
    this.getUsers();
    this.getPosts();
    this.getAllComments();
    this.getPhotos();
  }
  constructor(private router: Router, public appService: AppService, private mainServ: MainService, private element: ElementRef){}
  
  getUsers(): void {
    this.mainServ.getUsers().subscribe(user => this.users = user);
  }
  getPosts(): void {
    this.mainServ.getPosts().subscribe(post => this.posts = post);
  }
  getAllComments(): void {
    this.mainServ.getComments().subscribe(comment => this.comments = comment);
  }
  getPhotos(): void{
    this.mainServ.getPhotos().subscribe(photo => this.photos = photo);
  }

  publish(): void {
    this.newPost = '';
    this.isPublished = true;
    this.date = new Date();
    this.newPost = this.post;
    this.post = '';
    this.newComments = [];
  }
  postcommentShow(): void {
    this.comment = true;
  }
  publishComment(): void {
    this.newComments.push(this.newComment);
    this.newComment = '';
  }
  return(): void {
    this.comment = false;
  }
  logout() {
    this.appService.logout();
    // this.router.navigate['/login'];
  }

}
