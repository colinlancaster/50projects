const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
    console.log("I have scrolled to this position: " + window.scrollY);
    console.log("This is the current height of the nav bar and its border + 150: " + (nav.offsetHeight + 150));
    if (window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}