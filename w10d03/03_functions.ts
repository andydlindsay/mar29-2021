// return value
// arguments

const sayHello = (name: string, age?: string | number): string => {
  return `hello there ${name}`;
};

sayHello('Alice', 42);
sayHello('Alice');

const sayHello2 = (name: string, age?: string | number): void => {
  console.log(`hello there ${name}`);
};

const returningPromise = (input: string): Promise<string> => {
  return new Promise((resolve) => {
    resolve(input);
  });
};

returningPromise('hello')
  .then(data => {});

const higherOrderFunction = (cb: (name: string) => void, age?: number): void => {
  cb('Bob');
};
