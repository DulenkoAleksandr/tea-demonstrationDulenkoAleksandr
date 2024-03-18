// Node class to represent each element in the linked list
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// LinkedList class to represent the linked list
class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to add a new node to the end of the list
    append(data) {
        let newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }

    // Method to reverse the linked list
    reverse() {
        let prev = null;
        let current = this.head;
        let next = null;
        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        this.head = prev;
    }

    // Method to print the linked list
    print() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Helper function to create a linked list from an array
function createLinkedListFromArray(arr) {
    let list = new LinkedList();
    for (let element of arr) {
        list.append(element);
    }
    return list;
}

// Example usage
let myList = createLinkedListFromArray([1, 2, 3, 4, 5]);
console.log("Original List:");
myList.print();

console.log("Reversed List:");
myList.reverse();
myList.print();