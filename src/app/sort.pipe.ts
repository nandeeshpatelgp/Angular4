import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, order: string): any {
    if(order === "desc"){
      value.sort(function(a,b){
        if(a.name > b.name)
          return -1;
        if(a.name < b.name)
          return 1;
        return 0;
      });
    }else{
      value.sort(function(a,b){
        if(a.name > b.name)
          return 1;
        if(a.name < b.name)
          return -1;
        return 0;
      });
    }
    return value;
  }

}
