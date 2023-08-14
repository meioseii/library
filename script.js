const dialog = document.querySelector('#form-dialog');
const closeDialogBtn = document.querySelector('.cancel');
const openDialogBtn = document.querySelector('.add-book');

openDialogBtn.addEventListener('click', () => {
    dialog.showModal();
})

closeDialogBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
})