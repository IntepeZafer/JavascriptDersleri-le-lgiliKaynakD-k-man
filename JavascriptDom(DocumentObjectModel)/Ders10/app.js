const btn = document.querySelector(".btn");
const list_item = document.querySelectorAll(".list-item");
const listContent = document.querySelector(".listContent")

btn.addEventListener("click", () => {
    let li = document.createElement("li");
    li.textContent = "Javascript";
    li.classList.add("list-item");
    listContent.appendChild(li);
});
listContent.addEventListener("click" , (event) => {
    console.log(event.target);
    if(event.target.tagName === "LI"){
        event.stopPropagation();
        event.target.style.display = "none";
    }
})