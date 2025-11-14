const callModal = document.getElementById('callModal');
const messageModal = document.getElementById('messageModal');
const overlay = document.getElementById('burger-overlay');

const closeButtons = document.querySelectorAll('.modal__close');

document.getElementById('call-btn').addEventListener('click', openModal.bind(null, callModal));
document.getElementById('call-btn-burger').addEventListener('click', openModal.bind(null, callModal));
document.getElementById('message-btn').addEventListener('click', openModal.bind(null, messageModal));

closeButtons.forEach(btn => {
    btn.addEventListener('click', closeAllModals);
});

overlay.addEventListener('click', closeAllModals);

function openModal(modal) {
    modal.classList.add('open');
    overlay.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
}

function closeAllModals() {
    callModal.classList.remove('open');
    messageModal.classList.remove('open');
    overlay.style.display = 'none';
    document.documentElement.style.overflow = '';
}