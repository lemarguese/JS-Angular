import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { Category } from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  category: string;
  books: Category[] = [];
  // cart: Category[] = [];
  constructor(public loginService: LoginService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (!this.loginService.pressed) {
      this.initialize();
    }
    this.getDatabase();
  }

  initialize(): void {
    this.category = this.activatedRoute.snapshot.paramMap.get('category');
    let actionOtzyv = ["Good"];
    let fantasticOtzyv = ["Good"];
    let romanceOtzyv = ["Good"];
    let kazlitOtzyv = ["Good"];
    let ruslitOtzyv = ["Good"];
    const action = new Category(1, 'Волоколамское шоссе', '«Волоколамское шоссе» — повесть Александра Бека, одно из центральных произведений в творчестве писателя. Написана в 1942—1944 годах.', 5.99, 'action', 'https://s.f.kz/prod/1189/1188462_550.jpg', actionOtzyv);
    const fantastic = new Category(1, 'Harry Potter', 'Rowlings storytelling genius with the enchantment of Jim Kays illustrations, bringing the magic of Harry Potter to new readers with full-colour pictures and a handsome poster pull-out at the back of the book.', 14.99, 'fantastic', 'https://s.f.kz/prod/1748/1747367_550.jpg', fantasticOtzyv);
    const kazliterature = new Category(1, 'Тар жол – тайғақ кешу', 'Эта книга — живой, волнующий рассказ, основанный на свежих воспоминаниях автора о событиях, в которых он сам участвовал.', 23.99, 'kazliterature',   'https://adebiportal.kz/images/w350-cct-si/upload/iblock/eb9/eb97189b1bbf79b235456c91c416ba5a.jpg', kazlitOtzyv);
    const rusliterature = new Category(1, 'Мцыри', 'В книгу великого русского поэта Михаила Юрьевича Лермонтова (1814- 1841) вошли стихотворения 1828 — 1841 годов, знаменитые поэмы «Кавказский пленник», «Демон», «Мцыри» и др.', 8.99, 'rusliterature', 'https://s.f.kz/prod/1388/1387648_550.jpg', ruslitOtzyv);
    const romance = new Category(1, 'The notebook', 'Every so often a love story so captures our hearts that it becomes more than a story-it becomes an experience to remember forever. The Notebook is such a book.', 7.99, 'romance', 'https://s.f.kz/prod/824/823446_550.jpg', romanceOtzyv);
    const data: Category[] = [];
    data.push(action);
    data.push(fantastic);
    data.push(kazliterature);
    data.push(rusliterature);
    data.push(romance);
    localStorage.setItem('books', JSON.stringify(data));
  }

  getDatabase(): void {
    this.books = JSON.parse(localStorage.getItem('books'));
    this.books = this.books.filter(s => s.type === this.category);
  }

  addToCart(): void {
    //
  }

}
