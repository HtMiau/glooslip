window.addEventListener("scroll", function() {
    var menu = document.querySelector("header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 0) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});
