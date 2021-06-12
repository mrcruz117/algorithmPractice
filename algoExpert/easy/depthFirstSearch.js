class Node {
  constructor(name) {
    this.name = name;
    this.children = [];
  }

  addChild(name) {
    this.children.push(new Node(name));
    return this;
  }

  depthFirstSearch(array) {
    // console.log('Input: ',array)
    // console.log('this.name: ',this.name)

    array.push(this.name);

    for (const child of this.children) {
      child.depthFirstSearch(array);
    }
    return array;
  }
}
