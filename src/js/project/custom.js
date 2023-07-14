/* Favorite Button */
let favoriteButton = document.querySelectorAll(".favorite-button");

favoriteButton.forEach(favorite => {
    favorite.addEventListener("click", function () {
        if (favorite.querySelector("i").classList.contains("fa-light")) {
            favorite.querySelector("i").classList.remove("fa-light");
            favorite.querySelector("i").classList.add("fa-solid", "!text-red-500");
        } else {
            favorite.querySelector("i").classList.add("fa-light");
            favorite.querySelector("i").classList.remove("fa-solid", "!text-red-500");
        }
    })
})
/* Favorite Button */


/* Dropdown for product */
let customDropdown = document.querySelectorAll(".custom-dropdown");
let options = document.querySelectorAll(".options");
let option = document.querySelectorAll(".option");

customDropdown.forEach(dropdown => {
    dropdown.addEventListener("click", function (e) {

        options.forEach(options => {
            if (dropdown.getAttribute("data-dropdown-id") === options.getAttribute("data-options-id")) {
                dropdown.firstElementChild.lastElementChild.classList.toggle("rotate-180"); //angle-down-icon
                options.classList.toggle("options-open");

                option.forEach(option => {
                    option.addEventListener("click", function (e) {
                        let placeholderText = option.parentElement.parentElement.querySelectorAll(".placeholder span");
                        placeholderText.forEach(placeholderText => {
                            if (placeholderText.getAttribute("data-placeholder-id") === dropdown.getAttribute("data-dropdown-id")) {
                                placeholderText.innerHTML = option.firstElementChild.innerHTML;
                            }
                        })
                    })
                })
            }
        })
    })
})
/* Dropdown for product */


