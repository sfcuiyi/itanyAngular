import { Injectable } from '@angular/core';
import { MathserviceService } from './mathservice.service';

/*
  class A{}
  class B extends A{}
  let a : A = new B();
*/

@Injectable()
export class MathplusService implements MathserviceService{
  plus(x: number, y: number): number {
    return 1;
  }
  mins(x: number, y: number): number {
    return 1;
  }
  multy(x: number, y: number): number {
    return 1;
  }
  devide(x: number, y: number): number {
    return 1;
  }

  pow(n:number,x:number):number
  {
    return Math.pow(n,x);
  }
  

}
