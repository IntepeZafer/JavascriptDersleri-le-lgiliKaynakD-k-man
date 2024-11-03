const clock = document.querySelector(".clock");
setInterval(() => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();  
    const seconds = date.getSeconds();
    clock.innerText = `${hours} : ${minutes} : ${seconds}`;
}, 1000);