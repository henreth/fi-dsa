class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.tail = null;
    this.size = 0;
    // worst case O(n) for setting tail on initializing new list
    this.setTailAndSize();
  }

  // helper method for setting tail when list goes from empty to not empty
  // upon initialization
  // will be O(n) because user could add Node connected to other Nodes
  setTailAndSize() {
    this.size = 0;

    this.iterate((node) => {
      this.tail = node;
      this.updateSize('+');
    });
  }

  // helper method for updating size
  updateSize(operation) {
    operation === '+' ? ++this.size : --this.size;
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
  addFirst(node) {
    // O(1) operation: the tail will only be set if the list is empty
    if (this.head === null) {
      this.tail = node;
    }

    node.next = this.head;
    this.head = node;

    // increase size: O(1)
    this.updateSize('+');
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    if (this.head === null) {
      this.addFirst(node);
      return;
    }

    this.tail.next = node;
    // O(1) operation to set tail
    this.tail = node;
    // increase size: O(1)
    this.updateSize('+');

    // if (this.head === null) {
    //   this.head = node;
    // }

    // this.iterate(currNode => {
    //   if (currNode.next === null) {
    //     currNode.next = node;
    //     return true;
    //   }
    // });
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    const oldHead = this.head;

    if (this.head !== null) {
      this.head = this.head.next;
      this.updateSize('-');
    }

    // if list goes from 1 Node to empty, update tail O(1)
    if (this.head === null) {
      this.tail = null;
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

    // Could also set the tail inside iterate above
    // O(n) operation
    this.setTailAndSize();

    return oldTail;
  }

  // replace the node at the given index with the given node
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

        // If tail is being replaced O(1)
        if (node.next === null) {
          this.tail = node;
        }

        return true;
      }
    });

    return node;
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
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

        // if new node is inserted at the very end, O(1)
        if (oldNext === null) {
          this.tail = node;
        }

        return true;
      }
    });

    this.updateSize('+');
  }

  // remove the node at the given index, and return it
  remove(idx) {
    if (idx === 0) {
      return this.removeFirst();
    }

    let oldNode = null;

    this.iterate((node, count) => {
      if (count === idx - 1) {
        oldNode = node.next;
        node.next = node.next.next;
        // if tail was removed, update tail
        if (node.next === null) {
          this.tail = node;
        }

        return true;
      }
    }); 

    this.updateSize('-');

    return oldNode;
  }

  clear() {
    this.head = null;
    // null tail for empty list
    this.tail = null;
    this.size = 0;
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  let head = new Node('one', new Node('two', new Node('three', new Node('four'))));
  let list = new LinkedList(head);
  let emptyList = new LinkedList();
  let oneItemList = new LinkedList(new Node('just one'));

}

module.exports = {
  Node, LinkedList
};
