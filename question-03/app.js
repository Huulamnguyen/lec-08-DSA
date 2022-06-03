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
    
    //todo: should insert a new node at a given position
    insert(val, position){
        if(!this.head){
            this.head = new Node(val);
            return;
        }

        if(position === 0){
            this.head = new Node(val, this.head);
            return;
        }

        const previous = this.nodeAtIndex(position - 1) || this.getLast();
        const node = new Node(val, previous.next);
        previous.next = node; 
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

    //todo: should return the length of the linked list
    size() {
        let counter = 0;
        let node = this.head;
        while (node) {
            counter++;
            node = node.next;
        }
        return counter;
    }

    //todo: should return the node at the given index; if not found, return -1
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

    //todo: should print the list in this format:
    //todo: `${head node value} => ${node value} … => ${tail node value}`
    printList(){
        const my_arr = [];
        let current = this.head;
        while (current != null) {
            my_arr.push(current.val);
            current = current.next;
        }
        const string = my_arr.join("=>");
        console.log(string);
    }
}

let node = new singlyLinkedList()
node.append(4)
// node.append(4)
// node.append(5)
node.insert(5, 1);
node.insert(6, 2);
// node.remove(4)
console.log(node.size())
console.log(node.nodeAtIndex(0)) // should return node val 4
console.log(node.printList())
// console.log(node);