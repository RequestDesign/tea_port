//глобальный select.
const selectFathers = document.querySelectorAll('.select');

const setSelects = () => {
    if (selectFathers) {
        selectFathers.forEach((select) => {
            const childs = select.querySelectorAll('.select-item');

            childs.forEach((current) => {
                current.addEventListener('click', () => {
                    childs.forEach((item) => {
                        if (current === item) {
                            current.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                });
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', setSelects);

//выбор select, но с закрытием при повторном клике по итему
const selectFatherClose = document.querySelectorAll('.select-close');

const setCloseSelects = () => {
    if (selectFatherClose) {
        selectFatherClose.forEach((select) => {
            const childs = select.querySelectorAll('.select-item');

            childs.forEach((current) => {
                current.addEventListener('click', () => {
                    childs.forEach((item) => {
                        if (current === item && !item.classList.contains('active')) {
                            current.classList.add('active');
                        } else {
                            item.classList.remove('active');
                        }
                    });
                });
            });
        });
    }
};

document.addEventListener('DOMContentLoaded', setCloseSelects);
