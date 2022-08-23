import StackWithArray from "../src/StackWithArray";

test("Should be able to add a item in stack", () => {
    const stack = new StackWithArray();
    stack.push(1);
    stack.push(2);
    const topOfStack = stack.peek();
    expect(topOfStack).toBe(2);
})

test("Should be able to remove a item in stack", () => {
    const stack = new StackWithArray();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).toBe(2)
    const topOfStack = stack.peek();
    expect(topOfStack).toBe(1);
})

test("Should be able to check if the stack is empty", () => {
    const stack = new StackWithArray();
    const isEmptyStack = stack.isEmpty();
    expect(isEmptyStack).toBe(true);
})

test("Should be able to return the stack size", () => {
    const stack = new StackWithArray();
    const stackSize = stack.size();
    expect(stackSize).toBe(0);
})

test("Should be able to clear the stack", () => {
    const stack = new StackWithArray();
    stack.push(1);
    stack.push(2);
    stack.clear()
    expect(stack.isEmpty()).toBe(true);
})