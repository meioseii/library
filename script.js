const dialog = document.querySelector('#form-dialog');
const form = document.querySelector('form');
const closeDialogBtn = document.querySelector('.cancel');
const openDialogBtn = document.querySelector('.new-book');

openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
})

closeDialogBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
    form.reset();
})

