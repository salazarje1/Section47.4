/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode;
      this.tail = newNode; 
    } else {
      this.tail.next = newNode;
      this.tail = newNode; 
    }

    this.length++; 
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if(this.length === 0){
      this.head = newNode; 
      this.tail = newNode; 
    } else {
      newNode.next = this.head;
      this.head = newNode; 
    }
    this.length++; 
  }

  /** pop(): return & remove last item. */

  pop() {
    const rItem = this.tail;
    let currNode = this.head;

    if(this.length === 1){
      this.head = null;
      this.tail = null;
      this.length =  0; 
      return rItem.val; 
    }

    while(currNode){
      if(currNode.next === rItem){
        currNode.next = null;
        this.tail = currNode; 
      }
      currNode = currNode.next;
    }
    this.length--; 
    return rItem.val; 
  }

  /** shift(): return & remove first item. */

  shift() {
    const rItem = this.head; 
    this.head = this.head.next; 

    if(this.length === 1){
      this.tail = null; 
    }

    this.length--; 
    return rItem.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currNode = this.head; 

    for(let i = 1; i <= idx; i++){
      currNode = currNode.next; 
    }
    return currNode.val; 
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currNode = this.head;

    for(let i = 1; i <= idx; i++){
      currNode = currNode.next; 
    }
    
    currNode.val = val; 
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if(idx === this.length) return this.push(val); 

    let currNode = this.head; 
    for(let i = 1; i <= idx - 1; i++){
      currNode = currNode.next; 
    }
    
    let newNode = new Node(val); 
    let temp = currNode.next; 
    newNode.next = temp;
    currNode.next = newNode; 
    this.length++; 
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if(idx === 0) return this.shift();
    if(idx === this.length - 1) return this.pop(); 

    let prevNode = this.head; 
    for(leti = 1; i <= idx - 1; i++){
      prevNode = prevNode.next; 
    }

    let temp = prevNode.next.next; 
    let rNode = prevNode.next; 
    prevNode.next = temp; 

    return rNode; 

  }

  /** average(): return an average of all values in the list */

  average() {
    if(this.length === 0) return 0; 

    let sum = 0; 
    let currNode = this.head; 
    for(let i = 0; i <= this.length - 1; i++){
      console.log(currNode); 
      sum += currNode.val;
      currNode = currNode.next;
    }

    return sum / this.length; 
  }
}

module.exports = LinkedList;
