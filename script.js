const dialog = document.querySelector('#form-dialog');
const form = document.querySelector('form');
const closeDialogBtn = document.querySelector('.cancel');
const openDialogBtn = document.querySelector('.new-book');
const addBook = document.querySelector('.submit');
const cardContainer = document.querySelector('.card-container');

const myLibrary = [];

openDialogBtn.addEventListener('click', () => {
    form.reset();
    dialog.showModal();
})

closeDialogBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
})

addBook.addEventListener('click', () => {
    addBookToLibrary();
    insertCards();
});

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

function insertCards() {
    let cards = "";
    if (myLibrary) {
        myLibrary.forEach((book) => {
            cards += `<div class="card">
                        <div class="title">
                            <p>${book.title}</p>
                        </div>
                        <div class="author">
                            <p>by ${book.author}</p>
                        </div>
                        <div class="pages">
                            <p>${book.pages} pages</p>
                        </div>
                        <div class="remove-button">
                            <div class="status">
                                <label for="read-status">Have you read it?</label>
                                <input id="book-status" type="checkbox" ${book.status && "checked"}>
                            </div>
                            <button>Remove</button>
                        </div>
                    </div>`
        });
    };
    cardContainer.innerHTML = cards;
}
// make checkbox dynamic; style the card container;