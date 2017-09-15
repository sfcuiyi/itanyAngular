import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  //value ---> 要过滤的数据  ---> users --> 对象数组
  // args ---> key
  transform(value: Array<any>, args?: any): any {

    // let arr = [];
    // if(!args)
    // {
    //   return value;
    // }
    // for(let i = 0 ; i<value.length ; i++)
    // {
    //   // 如果args为‘’，永远返回-1
    //   if(value[i].username.indexOf(args) != -1)
    //   {
    //     arr.push(value[i]);
    //   }
    // }
    // return arr;

    // 数组中存在方法filter
    // 参数是一个function
    // function 有一个参数
    // 对数组中的每个元素进行遍历，调用function，参数就是当前遍历的元素
    // function 返回boolean类型，如果true，代表在新数组中保留该元素，否则不在新数组中保留该元素
    // filter 方法返回新数组
    // var newArr = [1,2,3,4].filter(function(data){
    //     return data % 2 == 0;
    // });

    return args ?  value.filter( (d) => d.username.indexOf(args) != -1)  : value;

  }

}
