const ParagrafEtiketi = document.querySelectorAll("p");
ParagrafEtiketi.forEach(array => {
    if(array.classList.contains("error")){
        array.classList.remove("error");
        array.classList.add("success");
    }else{
        array.classList.remove("success");
        array.classList.add("error");
    }
})
