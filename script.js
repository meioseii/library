const dialog = document.querySelector('#form-dialog');
const form = document.querySelector('form');
const closeDialogBtn = document.querySelector('.cancel');
const openDialogBtn = document.querySelector('.new-book');
const addBook = document.querySelector('.submit');

const myLibrary = [];

openDialogBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
})

closeDialogBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
    form.reset();
})

addBook.addEventListener('click', addBookToLibrary);

function Book(title, author, pages, status) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

function addBookToLibrary() {
  const bookTitle = document.getElementById('book-title').value;
  const bookAuthor = document.getElementById('book-author').value;
  const bookPages = document.getElementById('book-pages').value;
  const bookStatus = document.getElementById('book-status').checked;

  const book = new Book(bookTitle, bookAuthor, bookPages, bookStatus);

  bookTitle && bookAuthor && bookPages !== "" ? myLibrary.push(book) : null;
}