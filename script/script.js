const reveals = document.querySelectorAll(".reveal");

if (reveals.length > 0) {
    window.addEventListener("scroll", () => {

        reveals.forEach(section => {

            const top = section.getBoundingClientRect().top;

            if(top < window.innerHeight - 120){

                section.classList.add("active");

            }

        });

    });
}

const carousel = document.getElementById("carousel");
const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

if (carousel && rightBtn) {
    rightBtn.onclick = () => {
        carousel.scrollBy({
            left: 350,
            behavior: "smooth"
        });
    };
}

if (carousel && leftBtn) {
    leftBtn.onclick = () => {
        carousel.scrollBy({
            left: -350,
            behavior: "smooth"
        });
    };
}

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", () => {

        if(window.scrollY > 400){
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }

    });

    topBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}

const hamburger = document.getElementById('hamburger');
const hamNavLinks = document.getElementById('ham-nav-links');
const menuToggle = document.getElementById('menuToggle');

if (hamburger && hamNavLinks && menuToggle) {
    const closeHamburgerMenu = () => {
        hamburger.classList.remove('open');
        hamNavLinks.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    };

    menuToggle.addEventListener('click', event => {
        event.stopPropagation();
        hamburger.classList.toggle('open');
        hamNavLinks.classList.toggle('active');
        menuToggle.setAttribute('aria-expanded', hamNavLinks.classList.contains('active'));
    });

    hamNavLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeHamburgerMenu();
        });
    });

    document.addEventListener('click', event => {
        if (!hamburger.contains(event.target)) {
            closeHamburgerMenu();
        }
    });
}

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 200;
        const sectionHeight = section.offsetHeight;

        if (scrollY +300 >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.id;
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){
            link.classList.add("active");
        }

    });

});
