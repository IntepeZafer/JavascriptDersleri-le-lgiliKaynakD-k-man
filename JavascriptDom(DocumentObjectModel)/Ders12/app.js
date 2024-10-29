const button = document.querySelector("button");
const main_popup = document.querySelector(".main-popup");
const popup_close = document.querySelector(".popup-close");
button.addEventListener("click", () => {
    main_popup.style.display = "block";
});
popup_close.addEventListener("click" , () => {
    main_popup.style.display = "none";
})
main_popup.addEventListener("click" , (event) => {
    if(event.target.className == "main-popup") {
        main_popup.style.display = "none";
    }
});