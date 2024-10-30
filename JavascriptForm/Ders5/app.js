const myForm = document.querySelector("#myForm");
const nameInput = document.querySelector("#name");
const container = document.querySelector(".container");
nameInput.addEventListener("keyup" , () => {
    console.log(nameInput.value);
});