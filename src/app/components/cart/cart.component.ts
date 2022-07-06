import { BindingScope } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/model/game.model';
import { CartService } from 'src/app/services/cart.service';
import games from '../../data/igrice.json'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
 
  public grandTotal !: number;
  public serialNumber: string;
  public selectedValue: number
  public counter = 0;
  
  

  constructor(private cartService : CartService) { }
  
  ngOnInit(): void {
    this.calculateFullPrice();
    //this.selectedValue = 1
    
    
  }
  removeItem(item: Game){
    this.cartService.removeCartItem(item);
    this.calculateFullPrice();

    
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

  calculateFullPrice(){
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;//stavlja proizvod u korpu
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

 
  

}
