import { Sorter } from "./Sorter";
export class CharactersCollection extends Sorter {
  constructor(private data: string) {
    super();
  }

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    let split = this.data.split("");
    const leftHand = split[leftIndex];
    split[leftIndex] = split[rightIndex];
    split[rightIndex] = leftHand;
    this.data = split.join("");
  }

  print(): void {
    console.log(this.data);
  }
}
