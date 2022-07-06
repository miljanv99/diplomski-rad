import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardComponent } from './components/card/card.component';
import { CommonModule } from '@angular/common'
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatPaginatorModule} from '@angular/material/paginator';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import { DialogDetailsComponent } from './components/dialog-details/dialog-details.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { DialogOutOfStockComponent } from './components/dialog-out-of-stock/dialog-out-of-stock.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';





@NgModule({
  declarations: [
    AppComponent,
    CardListComponent,
    CardComponent,
    CartComponent,
    CheckoutComponent,
    DialogDetailsComponent,
    DialogOutOfStockComponent, 

    




  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, /* za ngModel */
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    MatPaginatorModule,
    NoopAnimationsModule,
    MatSelectModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatSnackBarModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
