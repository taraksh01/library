let myLibrary = [];
function book(title, author, noOfPages, read) {
  title;
  author;
  noOfPages;
  read;
  return { title, author, noOfPages, read };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const book1 = book("Tarak", "Also Tarak", 0, false);
const book2 = book("Title 1", "Author 1", 1, false);
const book3 = book("Title 2", "Author 2", 2, true);
const book4 = book("Title 3", "Author 3", 3, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

const container = document.querySelector(".container");

function showBook() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
  myLibrary.forEach((book) => {
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const author = document.createElement("h3");
    const pages = document.createElement("p");
    const read = document.createElement("div");

    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    pages.classList.add("pages");
    read.classList.add("read");

    title.textContent = book.title;
    author.textContent = `Author: ${book.author}`;
    pages.textContent = `Number of pages ${book.noOfPages}`;
    read.textContent = `Read: ${book.read ? "Yes" : "No"}`;

    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);

    container.appendChild(card);
  });
}

const newBook = document.querySelector(".add-book");
newBook.addEventListener("click", () => {
  document
    .querySelector(".book-details")
    .setAttribute("style", "visibility: visible");
});

const addBook = document.querySelector(".add");
addBook.addEventListener("click", () => {
  addBookToLibrary(book(title.value, author.value, pages.value, read.value));
  console.table(myLibrary);
  document
    .querySelector(".book-details")
    .setAttribute("style", "visibility: hidden");
  showBook();
});

showBook();
