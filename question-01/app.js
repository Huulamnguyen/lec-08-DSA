var stackSize = 0;

class Node {
    constructor(val) {
    this.val = val;
    this.next = null;
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.bottom = null;
    }

    //todo:  should add a new node to the top of the stack 
    //todo: and return the stack’s new length
    push(value){
        let newNode = new Node(value);
        if(!this.top){
            this.top = newNode;
            this.bottom = this.top;
        } else {
            let temp = this.top;
            this.top = newNode
            this.top.next = temp;
            // this.bottom = temp;
        }

        stackSize++;
        return stackSize;

    }

    //todo: should remove top node, shorten length and return removed node value
    pop(){
        if(!this.top) return null;
        let temp = this.top;
        if(this.top === this.bottom){
            this.bottom = null
        }

        this.top = this.top.next
        stackSize--;

        return temp.val;
    }

    //todo: should return length of the stack
    size(){
        return stackSize;
    }

    peek(){
        return this.top.val;
    }
}
let newStack = new Stack();
newStack.push(1)
newStack.push(3)
newStack.push(5)
console.log(newStack);
// console.log(newStack.pop());
// console.log(newStack.size());
// console.log(newStack.peek());