export default class StackWithObject {
    private count = 0;
    private items: any = {};

    push(element: any) {
        this.items[this.count] = element;
        this.count++;
    }

    size() {
        return this.count;
    }

    isEmpty() {
        return this.count === 0;
    }

    pop() {
        if(this.isEmpty()) return undefined;
        this.count--;
        const topOfStack = this.items[this.count];
        delete this.items[this.count];
        return topOfStack
    }

    peek() {
        if(this.isEmpty()) return undefined;
        return this.items[this.count -1];
    }

    clear() {
        this.items = {};
        this.count = 0;
    }
}