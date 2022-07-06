import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/model/game.model';

@Component({
  selector: 'app-dialog-out-of-stock',
  templateUrl: './dialog-out-of-stock.component.html',
  styleUrls: ['./dialog-out-of-stock.component.scss']
})
export class DialogOutOfStockComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Game) { }

  ngOnInit(): void {
  }

}
