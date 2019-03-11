import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


// Defining all app routes
const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' }, // path is the url page name which is matched to the component for that route
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignUpComponent },
  { path: '**', component: PageNotFoundComponent }


]; // array of all routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
