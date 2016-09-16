import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { Product } from './Product';

  
@Injectable()
export class UserService {
	
  private headers = new Headers({'Content-Type': 'application/json'});
  private productUrl = 'http://localhost:47503/api/products';
  //private productUrl ='http://localhost:47503/api/products?type=xml'; 
   constructor(private http: Http) { }

	getProductos(){
		return this.http.get(this.productUrl)
			.map( (responseData) => {
			  return responseData.json();
    }).map((prod: Array<any>) => {
      let result:Array<Product> = [];
      if (prod) {
        prod.forEach((prod) => {
          result.push(
                     new Product(prod.Id,
                              prod.Name,
							  prod.Category,
                              prod.Price));
        });
      }
      return result;
    });
  }

}
