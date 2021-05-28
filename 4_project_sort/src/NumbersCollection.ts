import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter{
  constructor(public data: number[]) {
    super();
  }
  
  get length(): number{
    return this.data.length;
  }
  
  compare(leftIndex:number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }
  swap(leftindex: number, rightIndex: number): void {
    const leftHand = this.data[leftindex];
    this.data[leftindex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}

const collection = new NumbersCollection([1, 2, 3]);

collection.length;