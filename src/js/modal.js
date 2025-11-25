// Модальные окна
const callModal = document.getElementById('callModal');
const messageModal = document.getElementById('messageModal');
const userModal = document.getElementById('userModal');
const toolsModal = document.getElementById('toolsModal');
const searchModal = document.getElementById('searchModal');
const overlay = document.getElementById('burger-overlay');

const allModals = [callModal, messageModal, userModal, toolsModal, searchModal];

function openModal(modal) {
    closeAllModals();
    modal.classList.add('open');
    overlay.style.display = 'block';
    document.documentElement.style.overflow = 'hidden';
}

function closeAllModals() {
    allModals.forEach(modal => {
        modal.classList.remove('open');
    });
    overlay.style.display = 'none';
    document.documentElement.style.overflow = '';
}

document.getElementById('call-btn').addEventListener('click', () => openModal(callModal));
document.getElementById('sidebar-call-btn').addEventListener('click', () => openModal(callModal));
document.getElementById('burger-call-btn').addEventListener('click', () => openModal(callModal));

document.getElementById('message-btn').addEventListener('click', () => openModal(messageModal));
document.getElementById('sidebar-message-btn').addEventListener('click', () => openModal(messageModal));
document.getElementById('burger-message-btn').addEventListener('click', () => openModal(messageModal));

document.getElementById('user-btn').addEventListener('click', () => openModal(userModal));
document.getElementById('sidebar-user-btn').addEventListener('click', () => openModal(userModal));
document.getElementById('burger-user-btn').addEventListener('click', () => openModal(userModal));

document.getElementById('tools-btn').addEventListener('click', () => openModal(toolsModal));
document.getElementById('tools-btn-services').addEventListener('click', () => openModal(toolsModal));

document.getElementById('search-btn').addEventListener('click', () => openModal(searchModal));
document.getElementById('search-btn-services').addEventListener('click', () => openModal(searchModal));

document.querySelectorAll('.modal__close').forEach(btn => {
    btn.addEventListener('click', closeAllModals);
});

overlay.addEventListener('click', closeAllModals);