const callModal = document.getElementById('callModal');
const messageModal = document.getElementById('messageModal');
const userModal = document.getElementById('userModal');
const toolsModal = document.getElementById('toolsModal');
const searchModal = document.getElementById('searchModal');

const overlay = document.getElementById('burger-overlay');
const closeButtons = document.querySelectorAll('.modal__close');

document.getElementById('call-btn').addEventListener('click', openModal.bind(null, callModal));
document.getElementById('call-btn-burger').addEventListener('click', openModal.bind(null, callModal));

document.getElementById('message-btn').addEventListener('click', openModal.bind(null, messageModal));
document.getElementById('message-btn-burger').addEventListener('click', openModal.bind(null, messageModal));

document.getElementById('user-btn').addEventListener('click', openModal.bind(null, userModal));
document.getElementById('user-btn-burger').addEventListener('click', openModal.bind(null, userModal));

document.getElementById('tools-btn').addEventListener('click', openModal.bind(null, toolsModal));
document.getElementById('tools-btn-services').addEventListener('click', openModal.bind(null, toolsModal));

document.getElementById('search-btn').addEventListener('click', openModal.bind(null, searchModal));
document.getElementById('search-btn-services').addEventListener('click', openModal.bind(null, searchModal));

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
    userModal.classList.remove('open');
    toolsModal.classList.remove('open');
    searchModal.classList.remove('open');
    overlay.style.display = 'none';
    document.documentElement.style.overflow = '';
}