import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit{ 
  public products : any = [];
  public totalPrice : any = 0;
  public totalItem: number = 0;
  
  
  constructor(private cartService : CartService,
              private snackBar: MatSnackBar,
              private router: Router) { }
  
  checkoutForm:any;

  

 
 

  ngOnInit(): void {
    
    
    
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.totalPrice =this.cartService.getTotalPrice()
      this.totalItem = res.length
    })
    this.checkoutForm = new FormGroup({
      formName : new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*')]),
      formLastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-z]*')]),
      formEmail: new FormControl('',[Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
      formAddress : new FormControl('',[Validators.required]),
      formCountry : new FormControl('',[Validators.required]),
      formNameOnCard : new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+(([,.] |[ -])[A-Za-z]+)*([.,-]?)$')]),
      formCardNumber : new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9]{15,15}$')]),
      formExpirationMonth : new FormControl('',[Validators.required,Validators.pattern('([1-9]|1[0-2])')]),
      formExpirationYear : new FormControl('',[Validators.required,Validators.pattern('(202[2-9]|20[34][0-9]|2050)')]),
      formCVV : new FormControl('',[Validators.required,Validators.pattern('^[1-9][0-9]{2,2}$')]),
    })



    

  }
  

  checkoutUser(){
    console.log(this.checkoutForm.value)
  }
  
  get formName(){
    return this.checkoutForm.get("formName")
  }
  get formLastName(){
    return this.checkoutForm.get("formLastName")
  }
  get formEmail(){
    return this.checkoutForm.get("formEmail")
  }

  get formAddress(){
    return this.checkoutForm.get("formAddress")
  }

  get formCountry(){
    return this.checkoutForm.get("formCountry")
  }
  
  get formNameOnCard(){
    return this.checkoutForm.get("formNameOnCard")
  }
  get formCardNumber(){
    return this.checkoutForm.get("formCardNumber")
  }
  get formExpirationMonth(){
    return this.checkoutForm.get("formExpirationMonth")
  }
  get formExpirationYear(){
    return this.checkoutForm.get("formExpirationYear")
  }
  get formCVV(){
    return this.checkoutForm.get("formCVV")
  }
  
  buyGame(){

    this.snackBar.open("You have successfully completed your purchase","OK",{
      panelClass:["snackBarOK"],duration: 5000
      
    })
 
    this.router.navigateByUrl('');
    this.cartService.removeAllCart();
    
    
  }
  
  
  
}
