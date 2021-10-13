import {NgModule} from '@angular/core';
import {RestService} from './rest.service';
import {HttpClientModule} from "@angular/common/http";
import {DataModelRepository} from "./data.model.repository";


@NgModule({
  imports:[HttpClientModule],
  providers: [RestService,DataModelRepository]

})

export class ModelModule {


}
