// ## Реализовать двусторонний двусвязный список

  // class LinkedList {

  //   constructor() {
  //     this._first;
  //     this._last;
  //   }
    
  //   add(number) {
  //     let node = new ListNode(number);
      
  //     if (this._last) {
  //       this._last.next = node;
  //       node.prev = this._last;
  //       this._last = node;
  //     } else {
  //       this._first = node;
  //       this._last = node;
  //     }
      
  //   }

  //   get first() {
  //     return this._first;
  //   }

  //   get last() {
  //     return this._last
  //   }
    
  // }

  class ListNode {
    constructor(value, next = null, prev = null) {
      this.value = value;
      this.next = next;
      this.prev = prev;
    }
  }

  function LinkedList () {

    return {

      first: 0,
      last: 0,
      
      add(number) {
        let node = new ListNode(number);
          
        if (this.last) {
          this.last.next = node;
          node.prev = this.last;
          this.last = node;
        } else {
          this.first = node;
          this.last = node;
        }
        
      },

      [Symbol.iterator]() {
        this.current = this.first;
        return this;
      },

      next() {
        if (this.current) {
          const value = this.current.value;
          this.current = this.current.next;
          return { done: false, value: value };
        } else {
          return { done: true };
        }
      }
      
    }
    
  }


   const list = LinkedList();
   
   list.add(1);
   list.add(2);
   list.add(3);
   
   // console.log(list.first.value);           // 1
   // console.log(list.last.value);            // 3
   // console.log(list.first.next.value);      // 2
   // console.log(list.first.next.prev.value); // 1

   for (const value of list) {
     console.log(value);
   }

  