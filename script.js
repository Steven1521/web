document.addEventListener('DOMContentLoaded', function() {
    const sideMenu = document.getElementById('side-menu');
    const section1 = document.getElementById('section1');
    const contenedor1 = document.getElementById('contenedor1');

    sideMenu.addEventListener('change', function() {
        if (sideMenu.checked) {
            section1.classList.add('hide-content');
            contenedor1.classList.add('hide-content');
        } else {
            section1.classList.remove('hide-content');
            contenedor1.classList.remove('hide-content');
        }
    });
});