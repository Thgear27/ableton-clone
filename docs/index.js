document.addEventListener('DOMContentLoaded', () => {
    main();
})

function main() {
    let svgLogo = document.querySelector(".nav__ul__logo");
    let svgAngle = document.querySelector(".nav__mobile-menu__svg");
    let mobileMenu = document.querySelector(".nav__mobile-menu");
    let menuList = document.querySelector(".main-nav-ul");


    mobileMenu.addEventListener('click', () => {
        let menuShown = menuList.getAttribute("show-menu");
        if (menuShown === "false") {
            svgAngle.setAttribute("show-menu", "true");
            svgLogo.setAttribute("show-menu", "true");
            mobileMenu.setAttribute("show-menu", "true");
            menuList.setAttribute("show-menu", "true");
            disableScroll();
        } else {
            svgAngle.setAttribute("show-menu", "false");
            svgLogo.setAttribute("show-menu", "false");
            mobileMenu.setAttribute("show-menu", "false");
            menuList.setAttribute("show-menu", "false");
            enableScroll();
        }
    });
}

function disableScroll() {
    // Get the current page scroll position
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

        // if any scroll is attempted, set this to the previous value
        window.onscroll = function() {
            window.scrollTo(scrollLeft, scrollTop);
        };
}

function enableScroll() {
    window.onscroll = function() {};
}
