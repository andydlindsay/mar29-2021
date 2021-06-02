interface IPotentialUser {
  username: string;
  password: string;
}

const login = (user: IPotentialUser): boolean => {
  console.log(user.username);
  return true;
};

const potentialUser = {
  username: 'jstamos',
  password: '1234',
  age: 42
};

login(potentialUser);
