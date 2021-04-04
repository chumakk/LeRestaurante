const slider = document.querySelector(".online-menu__slider");
const sliders = slider.children;
const slidePrev = document.querySelector("#omnPrev");
const slideNext = document.querySelector("#omnNext");

slideNext.addEventListener("click",(e) => {
    if (slider.classList.contains("active")) {
        return;
    }
    slider.classList.add("active");
    slider.style.transition = "transform 0.5s ease";
    slider.style.transform  = "translateX(-100%)";
    setTimeout(() =>{
        slider.style.transition = "none";
        const firstChild = slider.children[0];
        slider.style.transform  = "translateX(0)";
        slider.append(firstChild);
        slider.classList.remove("active");
    },500)

});

slidePrev.addEventListener("click",(e) => {
    if (slider.classList.contains("active")) {
        return;
    }
    slider.classList.add("active");
    slider.style.transition = "none";
    const lastChild = slider.children[slider.children.length - 1];
    slider.prepend(lastChild);
    slider.style.transform  = "translateX(-100%)";
    setTimeout(() =>{
        slider.style.transition = "transform 0.5s ease";
        slider.style.transform  = "translateX(0)";
        setTimeout(() =>{
            slider.classList.remove("active");
        },500)
    },0)

});


const burger = document.querySelector(".burger");
const body = document.querySelector("body");
burger.addEventListener("click", () =>{
    body.classList.toggle("burger-active");
    burger.classList.toggle("active");
});