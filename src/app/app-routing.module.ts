import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {IndexComponent} from './index/index.component';

import {PageNotFoundComponent} from './page-not-found/page-not-found.component';


import {PortalComponent} from './portal/portal.component';
import {CreateAuctionComponent} from './create-auction/create-auction.component';

import {AuctionsComponent} from './auctions/auctions.component';








// Defining all app routes
const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' }, // path is the url page name which is matched to the component for that route
  { path: 'home', component: HomeComponent, children: [
      { path: 'index', component: IndexComponent },
      { path: 'login', component: LoginComponent },
      { path: 'signup', component: SignUpComponent },
  ]},
  { path: 'portal', component: PortalComponent, children: [
      { path: 'create-auction', component: CreateAuctionComponent  },
      { path: 'auctions', component: AuctionsComponent },
  ]},
  { path: '**', component: PageNotFoundComponent },
]; // array of all routes

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
