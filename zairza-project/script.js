const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if(top < window.innerHeight - 120){

            section.classList.add("active");

        }

    });

});

document.getElementById("right").onclick = () => {
    carousel.scrollBy({
        left: 350,
        behavior: "smooth"
    });
};

document.getElementById("left").onclick = () => {
    carousel.scrollBy({
        left: -350,
        behavior: "smooth"
    });
};