export default class Queue {
  private count: number = 0;
  private lowestCount: number = 0;
  private items: any = {};

  enqueue(element: any) {
    this.items[this.count] = element;
    const item = this.items[this.count];
    this.count++;
    return item;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const firstElement = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return firstElement;
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  peek() {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  toString() {
    if (this.isEmpty()) return "";

    let objectToString = `${this.items[this.lowestCount]}`;
    for(let index = this.lowestCount + 1; index < this.count; index++) {
        objectToString = `${objectToString}, ${this.items[index]}`;
    }
    return objectToString;
  }
}
