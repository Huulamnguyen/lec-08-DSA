class Node {
    constructor(val) {
    this.val = val;
    this.next = null;
    }
}

var queueSize = 0;

class Queue { 
    constructor() {
        this.front = null;
        this.back = null;
    }

    //todo: should add a new node to end of the queue 
    //todo: and return the new length of the queue
    enqueue(value){
        let temp = new Node(value);
        if(this.front == null){
            this.front = this.back = temp;
            queueSize++;
            return;
        }
        this.back.next = temp;
        this.back = temp;
        queueSize++;

        return queueSize;
    }

    //todo: should remove the front node and return that node’s value
    dequeue(){
        if(this.front == null) return;

        let temp = this.front;
        this.front = this.front.next

        // if(this.front ==  null) this.back = null;

        return temp.val;
    }

    //todo: should return the length of the queue
    size(){
        return queueSize;
    }



}

let newQueue = new Queue();
newQueue.enqueue(2);
newQueue.enqueue(3);
// console.log(newQueue.enqueue(3));
console.log(newQueue)
// console.log(newQueue.dequeue());
console.log(newQueue.size())
