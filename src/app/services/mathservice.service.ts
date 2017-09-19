import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Injectable()
export class MathserviceService {

  constructor(fb:FormBuilder)
  {
    
  }

  plus(x :number,y:number):number
  {
    return x + y;
  }

  mins(x :number,y:number):number
  {
    return x - y;
  }

  multy(x :number,y:number):number
  {
    return x * y;
  }

  devide(x :number,y:number):number
  {
    return x / y;
  }


}
