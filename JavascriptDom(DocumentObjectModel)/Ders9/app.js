const btn = document.querySelector(".btn");
const list_item = document.querySelectorAll(".list-item");
const listContent = document.querySelector(".listContent")

btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "Javascript";
    li.classList.add("list-item");
    listContent.appendChild(li);
    li.addEventListener("click" , (event) => {
        event.target.style.display = "none";
    })
})
list_item.forEach((array) => {
    array.addEventListener("click", (event) => {
        event.target.style.display = "none";
    })
})