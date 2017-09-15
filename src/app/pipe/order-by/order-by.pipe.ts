import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: Array<any>, type?: any): any {
    return type ? value.slice().sort((a,b) => (a.age-b.age)*type) : value ;
  }

}
