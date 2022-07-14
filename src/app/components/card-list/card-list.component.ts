import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Game } from 'src/app/model/game.model';
import { CartService } from 'src/app/services/cart.service';
import games from '../../data/igrice.json'


@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss']
})
export class CardListComponent implements OnInit {
  gameList:Game[]= games
  gameListInitial: Game[]= games
  public totalItem: number = 0;
  ngTitle:any;
  ngPlatfrom:any;
  p:number = 1;

  constructor(private cartService: CartService,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    //this.gameList.forEach((a:Game)=>{
      //Object.assign(a,{quantity:1,total:a.price})
    //})

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length
    })

    this.gameList = this.gameListInitial
    
    
    
    
    
  }

  checkFunction(e){
    
    if (e.target.checked==true) {
      console.log(e.path[0].value)

      for (const i of this.gameList) {
        if (i.platform === e.path[0].value) {
          
          this.gameList= this.gameList.filter(res=>{
            
            return  res.platform.toLocaleLowerCase().match(this.ngPlatfrom.toLocaleLowerCase())
          });
          
        }
      }
    }
  }

 

  Search(){

      if (this.ngTitle == '') {
        this.ngOnInit()
      }else{
    
      this.gameList = this.gameList.filter(res=>{
        return res.title.toLocaleLowerCase().match(this.ngTitle.toLocaleLowerCase())
      
      })
    }
  }

  

   onScrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


}

  
  

