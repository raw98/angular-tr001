import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [{id:1,name:'phone xl',desc:'good',prix:500},{id:2,name:'phone xxl',desc:'good',prix:800},{id:3,name:'phone xxxl',desc:'good',prix:1000}];

  share() {
    window.alert('The product has been shared!');
  }
  onNotify(){
    window.alert('you will be notified when the product goes on sale!');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/