const LinkedList = require("./LinkedList");

// # ДЗ к лекции База#4

// ## Почитать Лафоре

// * Про стек

// * Про очередь

// ## Реализовать очередь на основе связанного списка

  class Queue {

    constructor() {
      this.list = LinkedList();
    }
    
    push(value) {
      this.list.pushBack(value);
    }

    get head() {
      try {
        return this.list.first.value
      } catch {
        this.exception();
      }
    }

    get tail() {
      try {
        return this.list.last.value
      } catch {
        this.exception();
      }
    }

    unshift(value) {
      try {
        this.list.pushFront(value);
      } catch {
        this.exception();
      }
    }

    shift() {
      try {
        return this.list.popFront();
      } catch {
        this.exception();
      }
    }

    pop() {
      try {
        return this.list.popBack();
      } catch {
        this.exception();
      }
    }

    exception() {
      throw new Error('Ошибка');
    }
    
  }

  
  

   // const queue = new Queue();
   
   // queue.push(10);
   // queue.push(11);
   // queue.push(12);
   
   // console.log(queue.head);  // 10
   
   // console.log(queue.pop()); // 10
   
   // console.log(queue.head);  // 11
   
   // console.log(queue.pop()); // 11
   // console.log(queue.pop()); // 12
   // console.log(queue.pop()); // Exception

  

// ## Реализовать двустороннюю очередь

   // const dequeue = new Queue();
   
   // dequeue.push(10);
   // console.log(dequeue.tail, dequeue.head, 'check');
   // dequeue.unshift(11);
   // console.log(dequeue.tail, dequeue.head, 'check');
   // dequeue.push(12);
   // console.log(dequeue.tail, dequeue.head, 'check');
   
   // console.log(dequeue.pop());   // 12
   // console.log(dequeue.tail, dequeue.head, 'check');
   // console.log(dequeue.shift()); // 11
   // console.log(dequeue.pop());   // 10
   // console.log(dequeue.pop());   // Exception

// ## Реализовать стек на основе типизированного массива заданной длины

  class Stack {
    constructor(intArr, capacity) {
      this.arr = new intArr(capacity);
      this.size = 0;
    }

    push(value) {
      if(this.size === this.arr.length) {
        this.exception();
      }
      this.arr[this.size] = value;
      this.size++
    }

    //top
    get head() {
      return this.arr[this.size - 1];
    }

    pop() {
      if(this.size === 0) {
        this.exception();
      }
      this.size--
      return this.arr[this.size]
    }

    
    exception() {
      throw new Error('Ошибка');
    }
    
  }


   const stack = new Stack(Int32Array, 10);
   
   stack.push(10);
   // console.log(stack, 'check');
   stack.push(11);
   stack.push(12);
   // console.log(stack, 'check');
   
   console.log(stack.head);  // 12
   
   console.log(stack.pop()); // 12
   
   console.log(stack.head);  // 11
   
   console.log(stack.pop()); // 11
   console.log(stack.pop()); // 10
   console.log(stack.pop()); // Exception
