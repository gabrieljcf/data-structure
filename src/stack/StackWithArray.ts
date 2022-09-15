export default class StackWithArray {
    private items: any = [];
    
    push(element: any) {
        this.items.push(element);
    }

    peek() {
        const topOfStack = this.items.length - 1;
        return this.items[topOfStack]
    }

    pop() {
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = [];
    }
}