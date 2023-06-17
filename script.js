let myLibrary = [];
function Book(title, author, noOfPages, read) {
  title;
  author;
  noOfPages;
  read;
  return { title, author, noOfPages, read };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = Book("Tarak", "Also Tarak", 0, false);
const book2 = Book("Title 1", "Author 1", 1, false);
const book3 = Book("Title 2", "Author 2", 2, true);
const book4 = Book("Title 3", "Author 3", 3, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);
console.table(myLibrary);
