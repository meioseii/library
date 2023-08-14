const dialog = document.querySelector('#form-dialog');
const addBookBtn = document.querySelector('.add-book');

addBookBtn.addEventListener('click', () => {
    dialog.showModal();
})