import { Injectable } from '@angular/core';
import { SomeService } from './SomeService';

@Injectable()
export class SomeServiceImplBService implements SomeService{
  plus(x: number, y: number): number {
    return (x + y) * 100;
  }

  constructor() { }

}
