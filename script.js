let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('active');
}


// Add shadow to header on scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");
    header.classList.toggle("shadow", window.scrollY > 50);
});


// Counter animation
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const count = +counter.innerText;

        const increment = target / 100;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target + "+";
        }
    };

    updateCount();
});


// Scroll reveal animation
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    sections.forEach(sec => {
        const sectionTop = sec.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            sec.classList.add("show");
        }
    });
});