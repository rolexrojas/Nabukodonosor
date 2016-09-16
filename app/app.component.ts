import { Component } from '@angular/core';
import { UserService } from './user.service';
import { Product } from './Product';
import {Http, Response, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'my-app',
   templateUrl: 'app/title.component.html',
   providers: [UserService]

})

export class AppComponent {
	 prod : Array<Product>;
	 username = "gay";
	 
    constructor(public userService: UserService) {
		userService.getProductos().subscribe(res => this.prod = res);
	}

  
}
