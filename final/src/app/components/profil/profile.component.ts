import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Category } from '../category/category';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  @ViewChild ('id') id: HTMLInputElement;
  @ViewChild ('title') title: HTMLInputElement;
  @ViewChild ('type') type: HTMLInputElement;
  // @ViewChild ('content') content: HTMLInputElement;
  // @ViewChild ('photo') url: HTMLInputElement;
  data: Category[] = [];
  username: string;
  constructor(public loginService: LoginService) { }
  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
    this.username = this.loginService.username;
    this.data = JSON.parse(localStorage.getItem('books'));
  }

  delete(): void {
    this.loginService.pressed = true;
    this.data = JSON.parse(localStorage.getItem('books'));
    this.data = this.data.filter( p => p.id !== parseInt(this.id.innerHTML) && p.title !== this.title.innerHTML && p.type !== this.type.innerHTML);
    localStorage.setItem('books', JSON.stringify(this.data));
    this.clear();
  }

  // update(): void {
  //   this.data = JSON.parse(localStorage.getItem('books'));
  //   this.data.filter(p => p.id !== parseInt(this.id.innerHTML) && p.type !== this.type.innerHTML);
  //   // let category = new Category(parseInt(this.id.innerHTML), this.title.innerHTML, this.content)
  //   // this.data.push(category);
  //   localStorage.setItem('books', JSON.stringify(this.data));
  // }

  create(): void {
    console.log(this.id.innerHTML, this.type.innerText, this.title.innerText);
    this.loginService.pressed = true;
    let database = this.data;
    this.data.filter(p => p.type === this.type.innerHTML);
    localStorage.removeItem('books');
    let id = this.data.length;
    let category = new Category(id++, this.title.innerHTML, "Good book, i prefer it! It is just template.", 7.99, this.type.innerHTML, "https://cdn.dribbble.com/users/264/screenshots/783787/book-dribbb.jpg", null);
    database.push(category);
    this.clear();
    localStorage.setItem('books', JSON.stringify(database));
  }

  clear(): void {
    this.type.innerHTML = "";
    this.id.innerHTML = "";
    this.title.innerHTML = "";
  }
}
