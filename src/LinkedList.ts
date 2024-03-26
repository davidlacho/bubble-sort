import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;

  constructor(private data: number) {}

  get value(): number {
    return this.data;
  }

  set value(number) {
    this.data = number;
  }
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  add(data: number): void {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      return;
    }

    let tail = this.head;
    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  get length(): number {
    if (!this.head) {
      return 0;
    }
    let length = 1;

    let node = this.head;
    while (node.next) {
      length++;
      node = node.next;
    }
    return length;
  }

  at(index: number): Node {
    if (!this.head) {
      throw new Error("Index out of boudns");
    }

    let counter = 0;
    let node: Node | null = this.head;

    while (node) {
      if (counter == index) {
        return node;
      }
      counter++;
      node = node.next;
    }

    throw new Error("Index out of bounds");
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error("List is empty");
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap(leftIndex: number, rightIndex: number): void {
    // This doesn't actually swap the node,
    // Just the value inside the node.
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);
    const leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }

  print(): void {
    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    const values = [];
    while (node) {
      values.push(node.value);
      node = node.next;
    }
    console.log(values);
  }
}
