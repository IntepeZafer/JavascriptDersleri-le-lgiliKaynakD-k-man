const nameInput = document.querySelector("#name");
const submitButton = document.querySelector("input");
const myForm = document.querySelector("#myForm");
const container = document.querySelector(".container");
let pattern = /^[a-zA-Z0-9]{1,10}$/;
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if(pattern.test(nameInput.value)) {
        let p = document.createElement("p");
        p.textContent = nameInput.value;
        container.appendChild(p);
    }
    else {
        let p = document.createElement("p");
        p.textContent = "Adınız 10 Karakterden Fazla Olamaz";
        container.appendChild(p);
    }
});