// ES6 set methods: has, values, add, remove(delete), size(property, not method)

const MySet = () => {
  const collection = [];

  // checks if exists in set
  this.has = (element) => collection.indexOf(element) !== -1;

  // returns values
  this.values = () => collection;

  // add element to set
  this.add = (element) => {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };

  // removes element from set
  this.remove = (element) => {
    if (this.has(element)) {
      const index = collection.indexOf(element);
      collection.splice(index, 1);
    }
  };

  // size of the collection set
  this.size = () => collection.length;

  // return union of two sets
  this.union = (otherSet) => {
    const unionSet = new MySet();
    const firstSet = this.values();
    const secondSet = otherSet.values();
    firstSet.forEach((e) => unionSet.add(e));
    secondSet.forEach((e) => unionSet.add(e));

    return unionSet;
  };
  // intersection of 2 sets as a new set
  this.intersection = (otherSet) => {
    const intersectionSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  // return the difference of two sets as a new set
  this.difference = (otherSet) => {
    const differentSet = new MySet();
    const firstSet = this.values();
    firstSet.forEach((e) => {
      if (!otherSet.has(e)) {
        differentSet.add(e);
      }
    });
    return differentSet;
  };

  // test if input is a subset of current set
  this.subset = (otherSet) => {
    const firstSet = this.values();
    return firstSet.every((value) => otherSet.has(value));
  };
};

const setA = new MySet();

setA.add('a');

console.log(setA);
