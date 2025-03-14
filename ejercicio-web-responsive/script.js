document.querySelector(".menu").addEventListener("click", function () {
    document.body.classList.toggle("menu-open");
    console.log('click al menu');
});
const headerHeight = document.querySelector('header').offsetHeight;
console.log('La altura del header es: ' + headerHeight + 'px');
