import StackWithObject from "../../src/stack/stackWithObject";

test("Should be able to add a item in stack", () => {
    const stack = new StackWithObject();
    stack.push(1);
    stack.push(2);
    const topOfStack = stack.peek();
    expect(topOfStack).toBe(2);
})

test("Should be able to remove a item in stack", () => {
    const stack = new StackWithObject();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2)
    const topOfStack = stack.peek();
    expect(topOfStack).toBe(1);
})

test("Should be able to return undefined when remove a item in empty stack", () => {
    const stack = new StackWithObject();
    expect(stack.pop()).toBe(undefined);
})

test("should return undefined when trying to view top item of empty stack", () => {
    const stack = new StackWithObject();
    expect(stack.peek()).toBe(undefined);
})

test("Should be able to check if the stack is empty", () => {
    const stack = new StackWithObject();
    const isEmptyStack = stack.isEmpty();
    expect(isEmptyStack).toBe(true);
})

test("Should be able to return the stack size", () => {
    const stack = new StackWithObject();
    const stackSize = stack.size();
    expect(stackSize).toBe(0);
})

test("Should be able to clear the stack", () => {
    const stack = new StackWithObject();
    stack.push(1);
    stack.push(2);
    stack.clear()
    expect(stack.isEmpty()).toBe(true);
})

test("Should be able to show the stack", () => {
    const stack = new StackWithObject();
    stack.push(1);
    stack.push(2);
    expect(stack.toString()).toBe("1,2");
})

test("Should be able to return a empty string when stack is empty", () => {
    const stack = new StackWithObject();
    expect(stack.toString()).toBe("");
})