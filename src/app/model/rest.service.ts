import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DataModel} from "./data.model";

@Injectable()
export class RestService {
  baseUrl = 'http://localhost:3500/';

  constructor(private http: HttpClient) {
  }
  getData():Observable<DataModel[]> {
    return this.http.get<DataModel[]>(this.baseUrl + 'data');

  }
}
