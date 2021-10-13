import {OnInit} from '@angular/core';
import {Injectable} from '@angular/core';
import {RestService} from './rest.service';
import {DataModel} from "./data.model";

@Injectable()

export class DataModelRepository implements OnInit {

  private data: DataModel[] = [];

  constructor(private restService: RestService) {
    this.restService
      .getData()
      .subscribe(datas => this.data = datas);
  }


  ngOnInit() {
  }
  getData(id: string): DataModel {

    return <DataModel>this.data.find(i => i.id === id);
  }
  getDatas(): DataModel[] {

    return this.data;
  }

}
