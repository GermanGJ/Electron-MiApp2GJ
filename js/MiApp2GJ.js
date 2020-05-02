const MenuHome = document.getElementById("v-pills-home-tab");
const MenuCRest = document.getElementById("v-pills-CRest-tab");

const FormaHome = document.getElementById("v-pills-home");
const FormaCRest = document.getElementById("v-pills-CRest");


MenuHome.addEventListener("click",() => {
    MenuHome.classList.add("active");
    MenuHome.setAttribute("aria-selected", "true");
    FormaHome.classList.add("show");
    FormaHome.classList.add("active");

    MenuCRest.classList.remove("active");
    MenuCRest.setAttribute("aria-selected", "false");
    FormaHome.classList.remove("show");
    FormaHome.classList.remove("active");
});

MenuCRest.addEventListener("click",() => {
    MenuHome.classList.remove("active");
    MenuHome.setAttribute("aria-selected", "false");
    FormaHome.classList.remove("show")
    FormaHome.classList.remove("active");

    MenuCRest.classList.add("active");
    MenuCRest.setAttribute("aria-selected", "true");
    FormaHome.classList.add("show");
    FormaHome.classList.add("active");
});