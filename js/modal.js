const modalTrigger = document.querySelectorAll('[contact-modal]');

//Adds listener to all elements with the attributes
for (let i = 0; i < modalTrigger.length; i++) {
  modalTrigger[i].addEventListener('click', showModalHandler);
}

function showModalHandler() {
  document.querySelector('.modal').style.display = 'block';
  document.querySelector('.backdrop').style.display = 'block';

  const modalCancelAction = document.querySelector('.backdrop');
  modalCancelAction.addEventListener('click', closeModalHandler);

  const modalCloseAction = document.querySelector('.modal-close');
  modalCloseAction.addEventListener('click', closeModalHandler);
}

function closeModalHandler() {
  document.querySelector('.modal').style.display = 'none';
  document.querySelector('.backdrop').style.display = 'none';
}
