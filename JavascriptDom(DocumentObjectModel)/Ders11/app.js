const boxContent = document.querySelector(".box");
boxContent.addEventListener("mousemove" , (event) => {
    event.target.textContent = `Y Kordinatı: ${event.offsetY} , X Kordinatı: ${event.offsetX}`;
})
document.addEventListener("wheel" , (event) => {
    console.log(event.target);
})