import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { GuardService } from 'src/app/services/guard.service';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { ProfileComponent } from './components/profil/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { BookitemComponent } from './components/bookitem/bookitem.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  component: LoginComponent,
  pathMatch: 'full'
},
{
  path: 'register',
  component: RegisterComponent,
  pathMatch: 'full'
},
{
  path: 'main/books',
  component: BooksComponent,
  pathMatch: 'full',
  canActivate: [GuardService]
},
{
  path: 'main/books/:category',
  component: CategoryComponent,
  pathMatch: 'full',
  canActivate: [GuardService]
},
{
  path: 'main/books/:category/:id',
  component: BookitemComponent,
  pathMatch: 'full',
  // canActivate: [GuardService]
},
{
  path: 'main',
  component: MainComponent,
  pathMatch: 'full',
  canActivate: [GuardService]
},
{
  path: 'profile',
  component: ProfileComponent,
  pathMatch: 'full',
  canActivate: [GuardService]
},
{
  path: 'cart',
  component: CartComponent,
  pathMatch: 'full',
  canActivate: [GuardService]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
