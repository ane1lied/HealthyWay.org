const modalButtons = document.querySelectorAll('.modal-button');
const modals = document.querySelectorAll('.modal');
const modalBackground = document.getElementById('modal-background');

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  modalBackground.style.display = 'block';
}

function closeModal() {
  modals.forEach((modal) => {
    modal.style.display = 'none';
  });
  modalBackground.style.display = 'none';
}

modalButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const modalId = this.getAttribute('data-modal');
    openModal(modalId);
  });
});

modalBackground.addEventListener('click', closeModal);

modals.forEach((modal) => {
  const closeButton = modal.querySelector('.close');
  closeButton.addEventListener('click', closeModal);
});