const myForm = document.querySelector("#myForm");
const container = document.querySelector(".container");
const h1 = document.querySelector("h1");
myForm.addEventListener("submit", (event) => {
    event.preventDefault();
    h1.textContent = event.target.name.value
    if(h1.textContent === ""){
        h1.textContent = "DOM"
    }
});