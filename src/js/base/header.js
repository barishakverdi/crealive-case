let html = document.getElementsByTagName("html")[0];
export let body = document.getElementsByTagName("body")[0];
let header = document.getElementById("header");
let headerHeight = header.getAttribute('data-header-height');
let headerStickyHeight = header.getAttribute('data-sticky-header-height');
let menuItem = document.querySelectorAll(".menu-item");
let languageSwitcher = document.getElementById("languageSwitcher");
let languageSwitcherMobile = document.getElementById("languageSwitcher-mobile");

//Preparing header height before it gets sticky
header.style.height = headerHeight + "px";


//Preparing dropdown hover mover animation
let afterHeaderBody = document.createElement("div");
header.firstElementChild.appendChild(afterHeaderBody);
afterHeaderBody.classList.add("mover");
afterHeaderBody.style.height = header.offsetHeight + "px";


/*Menu Item Hover Animation */
menuItem.forEach(item => {
    item.addEventListener("mouseover", function () {

        if (item.querySelector(".sub-menu") && window.innerWidth > 1200) {
            body.classList.add("after:h-full", "dropdown-active", "overflow-y-hidden");

            afterHeaderBody.style.height = header.offsetHeight + parseInt(item.querySelector(".sub-menu").offsetHeight) + "px";
            afterHeaderBody.classList.add("bg-white");
        }
    })

    item.addEventListener("mouseout", function () {
        body.classList.remove("after:h-full", "dropdown-active", "overflow-y-hidden");

        afterHeaderBody.style.height = header.offsetHeight + "px";
        afterHeaderBody.classList.remove("bg-white");
        //afterHeaderBody.style.backgroundColor = "transparent";
    })
})
/*Menu Item Hover Animation */


/* Sticky Header */
window.onscroll = function () {
    if (window.scrollY > 30) {
        html.classList.add("sticky-active");

        header.classList.add("!top-0", "z-50");
        header.style.height = headerStickyHeight + "px";

        //mover block height change
        afterHeaderBody.style.height = headerStickyHeight + "px";
    } else {
        html.classList.remove("sticky-active");

        header.classList.remove("!top-0", "z-50");
        header.style.height = headerHeight + "px";

        // coloredLogo.style.display = "none";
        // whiteLogo.style.display = "block";

        //mover block height change
        afterHeaderBody.style.height = headerHeight + "px";
    }

    /* Fixed Bottom Bar */
    let fixedBar = document.getElementById("fixedPriceBar");

    if (window.scrollY > 600) {
        fixedBar.classList.add("!bottom-0");
    } else {
        fixedBar.classList.remove("!bottom-0");
    }
    /* Fixed Bottom Bar */
}
/* Sticky Header */

/* Language Switcher */
languageSwitcher.addEventListener("click", function () {
    languageSwitcher.classList.toggle("switch-open");
})

//for mobile button
languageSwitcherMobile.addEventListener("click", function () {
    languageSwitcherMobile.classList.toggle("switch-open");
})
/* Language Switcher */

/* Sidenav */
let sideNav = document.getElementById("sideNav");
let menuBtn = document.getElementById("menu-btn");
let closeBtn = document.getElementById("close-button");
menuBtn.addEventListener("click", () => {
    sideNav.classList.toggle("open");
    // body.classList.toggle("overflow-y-hidden");
    menuBtn.classList.toggle("!items-start");
})

closeBtn.addEventListener("click", () => {
    sideNav.classList.remove("open");
    // body.classList.remove("overflow-y-hidden");
    menuBtn.classList.remove("!items-start");
})

menuItem.forEach(mobileItem => {
    let angle;

    if (mobileItem.querySelector(".sub-menu") && window.innerWidth < 1200) {
        mobileItem.classList.add("has-sub-menu");
        angle = mobileItem.appendChild(document.createElement("i"));
        angle.classList.add("fa-light", "fa-angle-down");

    } else {
        mobileItem.classList.remove("has-sub-menu");
    }

    mobileItem.addEventListener("click", () => {
        angle.classList.toggle("rotate-180");

        if (mobileItem.querySelector(".sub-menu") && window.innerWidth < 1200) {
            mobileItem.querySelector(".sub-menu").classList.toggle("sub-menu-open");
        }
    })
})
/* Sidenav */

