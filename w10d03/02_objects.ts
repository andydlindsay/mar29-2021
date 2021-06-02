// interface
interface IUser {
  id?: number;
  username: string;
  age: number;
  friends: string[];
}

const user: IUser = {
  // id: 7,
  username: 'jstamos',
  age: 42,
  friends: [],
}

user.friends[2]
// user.posts.comments.likes

const users: IUser[] = [];
users.push(user);
