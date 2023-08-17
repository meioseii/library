const dialog = document.querySelector('#form-dialog');
const form = document.querySelector('form');
const closeDialogBtn = document.querySelector('.cancel');
const openDialogBtn = document.querySelector('.new-book');
const addBook = document.querySelector('.submit');
const cardContainer = document.querySelector('.card-container');

/* console.log(document.getElementById("").parentElement.nodeName); */

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
    console.log()
});

function setStatus(book, newStatus) {
    book.status = newStatus;
}

function Book(title, author, pages, status) {
    this.id = Date.now(),
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

    bookTitle !== "" && bookAuthor !== "" && bookPages !== "" ? myLibrary.push(book) : null;
}

function insertCards() {
    let cards = "";
    if (myLibrary) {
        myLibrary.forEach((book, index) => {
            cards += `<div class="card" id="active">
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
                                <label>Have you read it?</label>
                                <input id="${book.id}" onchange="setStatus(myLibrary[${index}], this.checked)" type="checkbox" ${book.status ? "checked" : ""}>
                            </div>
                            <button>Remove</button>
                        </div>
                    </div>`
        });
    };
    cardContainer.innerHTML = cards;
}
// make checkbox dynamic; style the card container;