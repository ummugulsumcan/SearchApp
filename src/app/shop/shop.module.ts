import {NgModule} from '@angular/core';
import {ModelModule} from "../model/model.module";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ShopComponent} from "./shop.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {PipeModule} from "../pipes/pipe.module";


@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, CommonModule,ReactiveFormsModule,PipeModule],
  declarations: [ShopComponent,NavbarComponent],
  exports: [ShopComponent],

})

export class ShopModule {


}
