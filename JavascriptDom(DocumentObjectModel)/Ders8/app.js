const section = document.querySelector("section");
const sectionArray = Array.from(section.children);
sectionArray.forEach((array) => {
    array.classList.add("section-element");
})
const h2Tag = document.querySelector("h2");
console.log(h2Tag.nextElementSibling);
console.log(h2Tag.previousElementSibling); 