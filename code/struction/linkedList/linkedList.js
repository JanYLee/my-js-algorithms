/**
 * 链表的数据结构和基本操作
 * 插入, 查找, 删除
 */

// 链表节点基本结构
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// 链表类, 包含生成链表静态方法, 链表插入, 查询, 删除
export default class LinkedList {
  constructor(head) {
    // 创建一个空的头部方便操作
    // 传入参数如果是节点, 则接在头部后面, 否则根据传入值新建节点接在头部后
    this.head = new Node(Symbol('head'));
    if (head !== undefined) {
      this.head.next = head instanceof Node ? head : new Node(head);
    }
  }

  /**
   * 传入一个数组生成链表
   * 最后返回head
   *
   * @static
   * @param {*} arr
   * @returns 头部节点
   * @memberof LinkedList
   */
  static generator(arr) {
    if (!Array.isArray(arr)) return null;
    const head = new Node(arr.shift());
    arr.reduce((pre, cur) => (pre.next = new Node(cur)), head);
    return head;
  }

  // 根据传入值查找节点
  findByValue(val) {
    let node = this.head.next;
    while (node !== null && node.val !== val) {
      node = node.next;
    }
    return node === null ? -1 : node;
  }

  // 根据传入索引值查找节点
  findByIndex(index) {
    let node = this.head.next;
    let pos = 0;
    while (node !== null && pos !== index) {
      node = node.next;
      pos++;
    }
    return node === null ? -1 : node;
  }

  // 找到前一个节点
  findPreNode(val) {
    let node = this.head;
    while (node.next !== null && node.next.val !== val) {
      node = node.next;
    }
    if (node.next === null) return -1;
    return node;
  }

  // 链表末尾添加节点
  append(val) {
    const node = new Node(val);
    let cur = this.head;
    while (cur.next) {
      cur = cur.next;
    }
    cur.next = node;
  }

  // 向指定元素后插入
  insert(newVal, posVal) {
    if (posVal === undefined) this.append(newVal);
    const posNode = this.findByValue(posVal);
    if (!~posNode) {
      console.error(`找不到 ${posVal} 的位置`);
      return;
    }
    const newNode = new Node(newVal);
    newNode.next = posNode.next;
    posNode.next = newNode;
  }

  // 根据值删除节点
  remove(val) {
    const preNode = this.findPreNode(val);
    if (!~preNode) {
      console.error(`找不到值为 ${val} 的节点`);
      return;
    }
    preNode.next = preNode.next.next;
  }

  // 显示所有节点
  display() {
    let node = this.head.next;
    const result = [];
    while (node !== null) {
      result.push(node.val);
      node = node.next;
    }
    return result;
  }
}
