document.addEventListener('DOMContentLoaded', function () {
    document.addEventListener('keyup', function (evt) {
        if (evt.keyCode === 27) {
            closeModal('.map-modal');
        }
    });

    let feedbackModal = document.querySelectorAll('[data-modal="map"]');
    feedbackModal.forEach((el) => {
        el.addEventListener('click', function () {
            openModal('.map-modal');
        });
    });

    let modalBack = document.querySelector('.modal-back');
    modalBack.addEventListener('click', () => closeModal('.map-modal'));

    let modalExit = document.querySelector('.modal-exit');
    modalExit.addEventListener('click', () => closeModal('.map-modal'));
});

function openModal(modal) {
    let modalElement = document.querySelector(modal);
    modalElement.classList.add('active');
    document.body.classList.add('lock');
    modalElement.querySelector('.modal-wrapper').style.opacity = 1;
    modalElement.querySelector('.modal-back').style.opacity = 1;
}

function closeModal(modalClass) {
    document.body.classList.remove('lock');
    let modal = document.querySelector(modalClass);

    let modalWrapper = modal.querySelector('.modal-wrapper');
    modalWrapper.style.opacity = 0;
    let modalBack = modal.querySelector('.modal-back');
    modalBack.style.opacity = 0;
    setTimeout(function () {
        modal.classList.remove('active');
        modal.querySelector('.modal-content--first').classList.add('active');
    }, 390);
}
