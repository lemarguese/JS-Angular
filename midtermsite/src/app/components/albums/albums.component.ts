import { Component, OnInit } from '@angular/core';
import { Album } from 'src/app/classes/albums';
import { AppService } from 'src/app/services/app.service';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albums: Album[];
  constructor(private appServ: AppService, private mainServ: MainService) { }

  ngOnInit(): void {
    this.getAlbums();
  }

  getAlbums(): void {
    this.mainServ.getAlbums().subscribe(
      album => this.albums = album
    );
  }
  logout() {
    this.appServ.logout();
  }

}
