// stack functions: psuh, pop, peek(first element), length/size

// arrays have all those functions natively.
const letters = [];
const word = 'racecar';
let rword = '';

// put the letters into a stack
for (let i = 0; i < word.length; i += 1) {
  letters.push(word[i]);
}

// pop off stack in reverse order to concatinate it to the word.
for (let i = 0; i < word.length; i += 1) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(`${word} is a palindrome.`);
} else {
  console.log(`${word}   is NOT a palindrome.`);
}

// stack class
const Stack = () => {
  this.count = 0;
  this.storage = {};

  // adds value to the end of stack
  this.push = (value) => {
    this.storage[this.count] = value;
    this.count += 1;
  };

  // removes and returns value at end of stack.
  this.pop = () => {
    const result = this.storage[this.count];

    if (this.count === 0) {
      return undefined;
    }
    this.count -= 1;
    delete this.storage[this.count];
    return result;
  };

  this.size = () => this.count;

  this.peek = () => this.storage[this.count - 1];
};

const myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek);
console.log(myStack.pop);
console.log(myStack.peek);
