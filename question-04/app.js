class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class doublyLinkedList{
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    //todo: should add a new node with the given value to the end of the list
    append(val) {
        let newNode = new Node(val);
        this.tail = this.head;

        newNode.next = null;

        if(this.head == null){
            newNode.prev = null;
            this.head = newNode;
            return;
        }

        while(this.tail.next != null){
            this.tail = this.tail.next;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
    }

    //todo: should add a new node with the given value to the beginning of the list
    prepend(val){
        let newNode = new Node(val);

        newNode.next = this.head;
        newNode.prev = null;

        if(this.head != null){
            this.head.prev = newNode;
        }

        this.head = newNode;
    }

    //todo: should add a new node with the given value to the given index
    insert(val, index) {
        if(index >= this.size()){
            return;
        }
        if(index === 0){
            return this.prepend(val)
        }

        // this.size();

        let currentNode = this.head;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        const prevNode = currentNode.prev;
        const newNode = new Node(val);
        newNode.next = currentNode;
        newNode.prev = prevNode;

        prevNode.next = newNode;
        currentNode.prev = newNode;

        return newNode;

    }

    //todo: should remove the node with the given value from the list
    remove(val){
        let temp = this.head;
        let prev = null;
        if(temp != null && temp.val == val){
            this.head = temp.next;
            return;
        }

        while(temp != null && temp.val != val){
            prev = temp;
            temp = temp.next;
        }

        if(temp == null){
            return;
        }
        prev.next = temp.next;
    }


    //todo: should return the length of the list
    size(){
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    nodeAtIndex(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
            return node;
            }
            counter++;
            node = node.next;
        }
        return -1;
    }

    printList(){
        const my_arr = [];
        let current = this.head;
        while (current != null) {
            my_arr.push(current.val);
            current = current.next;
        }
        const string = my_arr.join("<=>");
        console.log(string);
    }
}

const node  = new doublyLinkedList();
node.append(1)
node.append(2)
// node.prepend(0)
// node.insert(0, 2)
node.remove(2)
// console.log(node.size())

// console.log(node.nodeAtIndex(1))
console.log(node.printList())