import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
 
  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  public consolesList = new BehaviorSubject<any>([]);
  public search = new BehaviorSubject<string>("");
  public game: Game
  
  

  constructor() { }
  getProducts(){
    return this.productList.asObservable();
    
  }

  addtoCart(product : Game){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
    
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
    })
    return grandTotal;
  }
  
  removeCartItem(product: Game){
    let index: number = this.cartItemList.indexOf(product)

    if (index !== -1) {
      this.cartItemList.splice(index,1)
    }
   
  }
  removeAllCart(){
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }

 
}
