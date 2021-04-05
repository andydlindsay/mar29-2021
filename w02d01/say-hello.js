const sayHello = (name) => {
  return `hello there ${name}`;
};

const MEANING_OF_LIFE = 42;

// module.exports = sayHello;

// module.exports.sayHello = sayHello;
// module.exports.MEANING_OF_LIFE = MEANING_OF_LIFE;

module.exports = {
  sayHello: sayHello,
  MEANING_OF_LIFE: MEANING_OF_LIFE
};

// module.exports === exports;
