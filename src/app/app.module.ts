import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertComponent } from './product-alert/product-alert.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ViewComponent } from './view/view.component';
import {Routes} from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './auth.service';
const routes : Routes = [
  {path:'appareil',component:ViewComponent},
  {path:'auth',component:AuthComponent},
  {path:'',component:ViewComponent}
];
@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
    ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertComponent,
    ProductDetailsComponent,
    ViewComponent,
    AuthComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [AuthService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/