const sayHello = function(name) {
  console.log(`hello there ${name}`);
};

// const anythingIWant = function() {};

const myObj = {
  message: 'hello world',
  anythingIWant: function(name) {
    console.log(`hello there ${name}`);
  },
  firstName: 'Dean',
  lastName: 'Cain',
  moreStuff: {
    firstName: 'Elise',
    lastName: 'CainTwo',
    fullName: function() {
      console.log(`${this.this.firstName} ${myObj.lastName}`);
    },
  },
  friends: [],
  addFriend: function(friendName) {
    this.friends.push(friendName);
  }
};

myObj['moreStuff']['fullNaem']();
myObj.moreStuff.fullName();

myObj.firstName

myObj.moreStuff.fullName();

// sayHello('Bob');
// myObj.anythingIWant('Carol');
// myObj['anythingIWant']('Dean');
// console.log();
// console['log']();
