import { Injectable } from '@angular/core';
import { SomeService } from './SomeService';

@Injectable()
export class SomeServiceImplAService implements SomeService{
  plus(x: number, y: number): number {
    return ( x + y ) * 10;
  }

  constructor() { }

}
