document.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('#map')) {
        ymaps.ready(function () {
            let map = new ymaps.Map('map', {
                center: [55.754203, 37.559988],
                zoom: 16,
                controls: []
            });
        });
    }
});
