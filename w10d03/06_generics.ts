interface IContainer<T> {
  name: string;
  contents: T;
  resolve?: () => T;
}

const stringContainer: IContainer<string> = {
  name: 'string container',
  contents: 'this is a string'
};

const numberContainer: IContainer<number> = {
  name: 'number container',
  contents: 42
};