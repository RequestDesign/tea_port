// body lock
export let bodyLockStatus = true;
/**
 * toggles body lock
 * @param {number} delay
 */
export const bodyLockToggle = (delay = 500) => {
    if (document.documentElement.classList.contains('lock')) {
        bodyUnlock(delay);
    } else {
        bodyLock(delay);
    }
};
/**
 * unlocks body
 * @param {number} delay
 */
export const bodyUnlock = (delay = 500) => {
    if (bodyLockStatus) {
        setTimeout(() => {
            document.documentElement.classList.remove('lock');
        }, delay);
        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};
/**
 * locks body
 * @param {number} delay
 */
export const bodyLock = (delay = 500) => {
    if (bodyLockStatus) {
        document.documentElement.classList.add('lock');

        bodyLockStatus = false;
        setTimeout(function () {
            bodyLockStatus = true;
        }, delay);
    }
};

const activeClass = 'active';

const burgerMenu = document.querySelector('.burger-menu');

if (burgerMenu) {
    const openBtn = document.querySelector('.header__burger-btn');
    const closeBtn = document.querySelector('.burger-menu__close-btn');

    openBtn.addEventListener('click', () => {
        if (bodyLockStatus) {
            burgerMenu.classList.add(activeClass);
            bodyLock();
        }
    });

    closeBtn.addEventListener('click', () => {
        if (bodyLockStatus) {
            burgerMenu.classList.remove(activeClass);
            bodyUnlock();
        }
    });
}
