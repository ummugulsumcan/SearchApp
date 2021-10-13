import {Component,OnInit} from '@angular/core';
import {RestService} from "../model/rest.service";
import {SearchFilterPipe} from "../pipes/search-filter.pipe";
import {DataModelRepository} from "../model/data.model.repository";
import {DataModel} from "../model/data.model";

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'shop',
  templateUrl: 'shop.component.html',
  providers: [SearchFilterPipe],
  styles: ['.pt-100 {padding-top: 100px}']
})

export class ShopComponent {
  searchValue = '';
  searchDeger = true;
  public newData: Array<DataModel> = [];

  constructor(
    private dataRepository: DataModelRepository,
    private restService: RestService
  ) {
    this.restService
    .getData()
    .subscribe(datas => this.newData = datas);
  }

  get datas(): DataModel[] {
    return this.dataRepository.getDatas();
  }

  searchInput(): any {
    
    if(this.searchValue){
     this.newData=this.datas.slice().filter(data => { 
    return  data.name?.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
        || data.bundle?.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
          || data.icon?.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
          || data.studio?.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
          || data.state?.toLocaleLowerCase().includes(this.searchValue.toLocaleLowerCase())
         
        }
        );
        this.searchDeger=false;
    }
    else{
      this.searchDeger=true;
    }
   
    
  }
 
 
}


