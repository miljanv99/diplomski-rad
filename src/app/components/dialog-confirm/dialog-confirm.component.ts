import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-dialog-confirm',
  templateUrl: './dialog-confirm.component.html',
  styleUrls: ['./dialog-confirm.component.scss']
})
export class DialogConfirmComponent implements OnInit {

  constructor(private cartService: CartService,
              private dialogRef: MatDialogRef<DialogConfirmComponent>,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  emptycart(){
    this.cartService.removeAllCart();
    this.dialogRef.close();
    this.snackBar.open("You successfully cleared your shopping cart","OK",{
      panelClass:["snackBarDelete"],duration:5000
    })
  }

}
