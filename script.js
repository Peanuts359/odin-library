const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function() {
    this.read = this.read === "read" ? "unread" : "read";
}

let cardsContainer;

function addBookToLibrary() {
  // do stuff here
}