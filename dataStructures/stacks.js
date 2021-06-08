//stack functions: psuh, pop, peek(first element), length/size

//arrays have all those functions natively.
var letters = [];
var word = 'racecar';
var rword = '';

//put the letters into a stack
for (let i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off stack in reverse order to concatinate it to the word.
for (let i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrome.`)
} else {
  console.log(`${word} is NOT a palindrome.`)
}

//stack class
const Stack = () => {
  this.count = 0;
  this.storage = {};

  //adds value to the end of stack
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count++;
  }

  // removes and returns value at end of stack.
  this.pop = () => {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  this.size = () => {
    return this.count;
  }

  this.peek = (value) => {
    return this.storage[this.count - 1];
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek);
console.log(myStack.pop);
console.log(myStack.peek);