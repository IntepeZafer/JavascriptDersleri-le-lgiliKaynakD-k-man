const ulList = document.querySelector('.main');
const student = ["Mark" , "Erich" , "John" , "Cartman" , "John"];
let html = ``;
student.forEach(student => {
    html += `<li>${student}</li>`;
});
ulList.innerHTML = html;