import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/model/game.model';

@Component({
  selector: 'app-dialog-details',
  templateUrl: './dialog-details.component.html',
  styleUrls: ['./dialog-details.component.scss']
})
export class DialogDetailsComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Game) { }

  ngOnInit(): void {
  }

}
