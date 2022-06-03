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

    getLast() {
        if (!this.head) {
            return null;
         }
        let node = this.head;
        while (node) {
            if (!node.next) {
                return node;
            }
            node = node.next;
        }
    }


    getAt(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
            return node;
            }
            counter++;
            node = node.next;
        }
        return null;
    }
    

    insert(val, position){
        if(!this.head){
            this.head = new Node(val);
            return;
        }

        if(position === 0){
            this.head = new Node(val, this.head);
            return;
        }

        const previous = this.getAt(position - 1) || this.getLast();
        const node = new Node(val, previous.next);
        previous.next = node; 

    }
    
}

let node = new singlyLinkedList()
node.append(4)
// node.append(4)
// node.append(5)
node.insert(5, 1);
node.insert(6, 2);
console.log(node);