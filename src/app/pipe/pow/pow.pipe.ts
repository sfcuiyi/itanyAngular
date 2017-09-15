import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pow'
})
export class PowPipe implements PipeTransform {

  //  {{ data | pow : x  }}
  // data: 要过滤的数据 ==> value
  // pow : 管道的名字 ==> @Pipe中的name
  // x   : 管道的参数 ===> args ?代表该参数可有可无  arguments 管道参数列表
  //  transform方法可以有N个参数(N>=1),第一个参数是要过来的数据，后面所有的参数都是管道的参数
  // return ： 格式化的结果
  transform(value: any, n?: number): number {
    return Math.pow(value,n);
  }

}
