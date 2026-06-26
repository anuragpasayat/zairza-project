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

const topBtn = document.getElementById("topBtn");

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