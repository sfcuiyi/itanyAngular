import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, n: number): Array<any> {
    //将数据中所有n的倍数的元素保留 ==> 过滤掉所有非n的倍数的元素
    let result = [];
    for(let i = 0 ; i<value.length ; i++)
    {
      if(value[i] % n == 0)
      {
        result.push(value[i])
      }
    }
    return result;
  }

}
