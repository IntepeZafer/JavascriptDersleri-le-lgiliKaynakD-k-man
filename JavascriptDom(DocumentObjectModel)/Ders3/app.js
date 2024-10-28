const ParagrafDegeri = document.querySelector("p");
console.log(ParagrafDegeri.innerText);
ParagrafDegeri.innerText = "Hello World!";
const ParagrafDegeri1 = document.querySelectorAll("p");
ParagrafDegeri1.forEach((array) => {
    array.innerText += " Hello World!";
})
const icerik = document.querySelector(".icerik");
console.log(icerik.innerHTML);
icerik.innerHTML += "<h1>Hello World</h1>";
const ogrenciler = ['Ogrenci1' , 'Ogrenci2' , 'Ogrenci3'];
ogrenciler.forEach((array) => {
    icerik.innerHTML += `<p>${array}</p`;
});