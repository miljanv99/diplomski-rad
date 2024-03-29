import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from 'src/app/model/game.model';
import { CartService } from 'src/app/services/cart.service';
import { DialogConfirmComponent } from '../dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal : number;
  public totalItem: number = 0;
  

  constructor(private cartService : CartService,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) { }
  
  ngOnInit(): void {
    this.calculateFullPrice();
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length
    })
    
  }
  removeItem(item: Game){
    this.cartService.removeCartItem(item);
    this.calculateFullPrice();
    this.totalItem = this.totalItem - 1
    this.snackBar.open("You successfully deleted: " + item.title,"OK",{
      panelClass:["snackBarDelete"],duration:2000
    })
    
  }
 

  openDialogConfirm(){
    this.dialog.open(DialogConfirmComponent,{
      width: '500px'
    })
  }

  calculateFullPrice(){
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;//all added products
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

 
  

}
