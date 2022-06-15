class DoublyLinkedList {
  constructor(head = null) {
    this.head = head;
  }

  iterate(callback) {
    let count = 0;
    let temp = this.head;

    while (temp !== null) {
      const result = callback(temp, count);

      if (result === true) {
        return temp;
      }

      ++count;
      temp = temp.next;
    }

    return this.head;
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate(node => console.log(node.value));
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let result = null;

    this.iterate(node => {
      if (node.value === target) {
        result = node;

        return true;
      }
    });

    return result;
  }

  // add the node to the start of the list, no nodes should be removed
  // MODIFY TO UPDATE PREV
  addFirst(node) {
    node.next = this.head;

    if (this.head !== null) {
      this.head.prev = node;
    }
    
    this.head = node;
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  // MODIFY TO UPDATE PREV
  addLast(node) {
    if (this.head === null) {
      this.head = node;
      return;
    }

    this.iterate(currNode => {
      if (currNode.next === null) {
        currNode.next = node;
        node.prev = currNode;
        return true;
      }
    });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  // MODIFY TO UPDATE PREV
  removeFirst() {
    const oldHead = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
    }

    if (this.head !== null) {
      this.head.prev = null;
    }

    return oldHead;
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    if (this.head === null || this.head.next === null) {
      return this.removeFirst();
    }

    let oldTail = null;

    this.iterate(node => {
      if (node.next.next === null) {
        oldTail = node.next;
        node.next = null;
        return true;
      }
    });

    return oldTail;
  }

  // replace the node at the given index with the given node
  // MODIFY TO UPDATE PREV
  replace(idx, node) {
    if (idx === 0) {
      this.removeFirst();
      this.addFirst(node);
      return node;
    }

    this.iterate((currNode, count) => {
      if (count === idx - 1) {
        node.next = currNode.next.next;
        currNode.next = node;
        node.prev = currNode;

        if (currNode.next.next !== null) {
          currNode.next.next.prev = node;
        } 

        return true;
      }
    });

    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  // MODIFY TO UPDATE PREV
  insert(idx, node) {
    if (idx === 0) {
      this.addFirst(node);
      return;
    }

    this.iterate((currNode, count) => {
      if (count === idx - 1) {
        const oldNext = currNode.next;
        currNode.next = node;
        node.next = oldNext;
        node.prev = currNode;

        if (oldNext !== null) {
          oldNext.prev = node;
        }

        return true;
      }
    });
  }

  // remove the node at the given index, and return it
  // MODIFY TO UPDATE PREV
  remove(idx) {
    if (idx === 0) {
      return this.removeFirst();
    }

    let oldNode = null;

    this.iterate((node, count) => {
      if (count === idx - 1) {
        oldNode = node.next;
        node.next = node.next.next;

        if (node.next !== null) {
          node.next.prev = node;
        }

        return true;
      }
    }); 

    return oldNode;
  }

  clear() {
    this.head = null;
  }
}

class Node {
  constructor(value = null, next = null, prev = null) {
    this.value = value;
    this.next = next;
    this.prev = prev;
  }
}

if (require.main === module) {
  // add your own tests in here
  
}

module.exports = {
  Node, DoublyLinkedList
};
