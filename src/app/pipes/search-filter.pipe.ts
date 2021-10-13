import {Pipe, PipeTransform} from '@angular/core';
import {DataModel} from "../model/data.model";

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(datas: DataModel[], searchvalue: string): any {
    if (!datas || !searchvalue) {
      return datas;
    }
    return datas.filter(data =>data.name?.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
    || data.bundle?.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
      || data.icon?.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
      || data.studio?.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())
      || data.state?.toLocaleLowerCase().includes(searchvalue.toLocaleLowerCase())

    );
  }

}
