const hrefTag = document.querySelector("a");
console.log(hrefTag.getAttribute('href'));
hrefTag.setAttribute('href',"www.youtube.com");
console.log(hrefTag.getAttribute('href'));
hrefTag.textContent = "YouTube";
const ParagrafDegeri = document.querySelector(".icerik");
ParagrafDegeri.setAttribute('class' , 'icerik1');
console.log(ParagrafDegeri);
ParagrafDegeri.setAttribute('style' , 'Background-Color:red; Padding : 1rem; color:white; Border-Radius:1rem;');
