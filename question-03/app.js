class Node {
    constructor(val) {
    this.val = val;
    this.next = null;
    }
}

class singlyLinkedList{
    constructor(head){
        this.head = head;
    }

    //todo: should add a new node to the end of the linked list
    append(val){
        let newNode = new Node(val);
        if(!this.head){
            this.head = newNode;
            return this.head;
        }

        let current = this.head;
        while(current.next){
            current = current.next;
        }

        current.next = newNode;

        return this.head;
    }

    // todo: should add a new node to the beginning of the linked list
    prepend(val){

        let temp = new Node();
        if(temp == null) return;

        temp.val = val;
        temp.next = this.head;
        this.head = temp;
    }

    //todo: should insert a new node at a given position

    // insert(val, position){
    //     if(!this.head){
    //         this.head = new Node(val);
    //         return;
    //     }

    //     if(position === 0){
    //         this.head = new Node(val, this.head);
    //         return;
    //     }

    //     const previous = this.
    // }
    
}

let node = new singlyLinkedList()
node.append(3)
node.append(4)
node.append(5)
console.log(node);