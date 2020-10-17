import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/classes/user';
import { Photo } from 'src/app/classes/photo';
import { UsersService } from 'src/app/services/users.service';
import { AppService } from 'src/app/services/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  photos: Photo[];
  // logged = false;
  constructor(private router: Router, public appServ: AppService, private userService: UsersService) { 

  }

  ngOnInit(): void {  
    this.getAvatars();
    this.getUsers();
  }
  getUsers(): void {
    this.userService.login().subscribe(users => this.users = users);
  }

  getAvatars(): void {
    this.userService.getAvatars().subscribe(ava => this.photos = ava);
  }
  logout() {
    this.appServ.logout();
    // this.router.navigate['/login'];
  }
}
