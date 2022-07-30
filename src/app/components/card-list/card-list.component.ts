import { Component, OnInit } from '@angular/core';
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
  totalItem: number = 0;
  ngTitle:string;
  p:number = 1;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {

    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length
    })

    this.gameList = this.gameListInitial

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

  
  

