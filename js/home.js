// Criação de scroll para nav
window.onscroll = function () {
    fixar();
}

var nav = document.getElementsByTagName('nav');

var fix = nav.offsetTop;

function fixar() {
    if (window.pageYOffset > 100) {
        nav[0].className = 'nav-fixed';
    } else {
        nav[0].className = 'nav';
    }
}