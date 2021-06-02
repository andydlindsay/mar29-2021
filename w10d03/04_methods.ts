interface IBook {
  title: string;
  numPages: number;
}

interface IAuthor {
  penName: string;
  realName?: string;
  numBooksPublished?: number;
  books: IBook[];

  writeBook: (title: string) => boolean
}

const agatha: IAuthor = {
  penName: 'Agatha Christie',
  books: [],
  writeBook: function(title: string) {
    // whatever
    this.books.push({title, numPages: 450});
    return true;
  }
};