import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from 'src/app/model/game.model';
import { CartService } from 'src/app/services/cart.service';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.scss']
})
export class DialogDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Game,
              private cartService: CartService,
              private dialogRef: MatDialogRef<CardComponent>,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  addtoCart(item:Game){
    this.cartService.addtoCart(item);
    this.dialogRef.close(item);
    this.snackBarSuccessfulBuy();
  }

  snackBarSuccessfulBuy(){
    this.snackBar.open("You successfully added in cart: " + this.data.title, "OK",{
      panelClass:["snackBarOK"], duration: 5000
    }
    );
  }

}
