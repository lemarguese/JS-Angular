import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Category } from '../category/category';

@Component({
  selector: 'app-bookitem',
  templateUrl: './bookitem.component.html',
  styleUrls: ['./bookitem.component.scss']
})
export class BookitemComponent implements OnInit {
  otzyv = new FormControl(
    ''
  );
  // @ViewChild ('otzyv') feedback: Element
  books: Category[];
  constructor(private activatedRoute: ActivatedRoute, public loginService: LoginService) { }
  category: Category;
  ngOnInit(): void {
    const type = this.activatedRoute.snapshot.paramMap.get('category');
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.books = JSON.parse(localStorage.getItem('books'));
    this.books = this.books.filter(p => p.id === parseInt(id) && p.type === type);
    this.category = this.books.find(p => p.id === parseInt(id) && p.type === type);
  }

  publish(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const feedbacks = this.category.otzyvy;
    const doc = this.otzyv.value;
    feedbacks.push(doc);
    this.books.find(p => p.id === parseInt(id)).otzyvy = feedbacks;
    localStorage.setItem('books', JSON.stringify(this.books));
  }

}
