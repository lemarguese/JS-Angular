import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './main/main.component';
import { SignupComponent } from './components/signup/signup.component';
import { UsersComponent } from './components/users/users.component';
import { GuradService } from './services/gurad.service';
import { MainGuardService } from './services/main-guard.service';
import { AlbumGuardService } from './services/album-guard.service';

const routes: Routes = [
{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
},
{
  path: 'users',
  component: UsersComponent,
  pathMatch: 'full',
  canActivate: [GuradService]
},
{
  path: 'sign-up',
  component: SignupComponent,
  pathMatch: 'full'
},
{
  path: 'main',
  component: MainComponent,
  pathMatch: 'full',
  canActivate: [MainGuardService]
},
{
  path: 'albums',
  component: AlbumsComponent,
  pathMatch: 'full',
  canActivate: [AlbumGuardService]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
