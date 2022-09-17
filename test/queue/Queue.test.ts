import Queue from "../../src/queue/Queue"

test("Should be able to add a new item in queue", () => {
    const queue = new Queue();
    const item = queue.enqueue(1);
    expect(item).toBe(1);
});

test("Should be able to remove a item in queue", () => {
    const queue = new Queue();
    queue.enqueue(2);
    const firstItem = queue.dequeue();
    expect(firstItem).toBe(2);
});

test("Should be able to show a first queue item", () => {
    const queue = new Queue();
    queue.enqueue(3);
    queue.enqueue(4);
    const firstItem = queue.peek();
    expect(firstItem).toBe(3);
});

test("Should be able to check if the queue is empty", () => {
    const queue = new Queue();
    expect(queue.isEmpty()).toBe(true);
});

test("Should be able to show the queue size", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.size()).toBe(2);
});

test("Should be able to remove all elements from queue", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.clear();
    expect(queue.size()).toBe(0)
});

test("Should be able to show queue items", () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    expect(queue.toString()).toBe("1, 2");
})