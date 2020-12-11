import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { BooksComponent } from './components/books/books.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './components/register/register.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import { CategoryComponent } from './components/category/category.component';
import {MatDividerModule} from '@angular/material/divider';
import { ProfileComponent } from './components/profil/profile.component';
import {MatRadioModule} from '@angular/material/radio';
import { CartComponent } from './components/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    BooksComponent,
    RegisterComponent,
    CategoryComponent,
    ProfileComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    MatRadioModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatDividerModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  exports: [
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatRadioModule,
    MatSidenavModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
