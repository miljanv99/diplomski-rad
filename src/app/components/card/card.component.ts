import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Game } from 'src/app/model/game.model';
import { CartService } from 'src/app/services/cart.service';
import { DialogDetailsComponent } from '../dialog-details/dialog-details.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() inputGame : Game
  constructor(private cartService : CartService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    
  }

  addtoCart(item:Game){
    this.cartService.addtoCart(item);
    
  }
  //actionMethod($event: MouseEvent, id:number) {
    //($event.target as HTMLButtonElement).disabled = true;
  //  
//}
openDialogDetails(){
  this.dialog.open(DialogDetailsComponent,{
    width:'1800px',
    height: '900px',
    data: {id: this.inputGame.id, title: this.inputGame.title, img: this.inputGame.img, price: this.inputGame.price, consoleImg: this.inputGame.consoleImg, inStock: this.inputGame.inStock, digitalDownload: this.inputGame.digitalDownload, aboutTheGame: this.inputGame.aboutTheGame, rating: this.inputGame.rating, developer: this.inputGame.developer, publisher: this.inputGame.publisher, releaseDate: this.inputGame.releaseDate, genre: this.inputGame.genre, minimumConfig: this.inputGame.minimumConfig, recommendedConfig: this.inputGame.recommendedConfig }
  })

  console.log(this.inputGame.minimumConfig.OS)
}

}
