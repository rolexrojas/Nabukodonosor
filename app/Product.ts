export class Product {
  Category: string;
  Id: number;	
  Name: string;
  Price : number;
  constructor(id: number, name: string, category: string, price: number){
	  this.Id = id;
	  this.Name = name;
	  this.Category = category;
	  this.Price = price;
  }
}