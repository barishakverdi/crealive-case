import {body} from "./header.js";
let modalContainer = document.querySelector(".modal-container");
let modal = modalContainer.querySelectorAll(".modal");
let modalTriggerButton = document.querySelectorAll(".modal-trigger-button");
let modalCloseButton = modalContainer.querySelectorAll(".close-button");

modalTriggerButton.forEach(button => {
    button.addEventListener("click", function () {
        modalContainer.classList.toggle("closed");
        body.classList.toggle("overflow-hidden");

        modal.forEach(modal => {
            if (button.getAttribute("modal-trigger-id") === modal.getAttribute("modal-id")) {
                modal.classList.remove("closed");
                modal.classList.add("opened");
            }
        })
    })
})

modalCloseButton.forEach(closeButton => {
    closeButton.addEventListener("click", function() {
        modalContainer.classList.toggle("closed");
        body.classList.toggle("overflow-hidden");

        modal.forEach(modal => {
            modal.classList.add("closed");
            modal.classList.remove("opened");
        })
    })
})
