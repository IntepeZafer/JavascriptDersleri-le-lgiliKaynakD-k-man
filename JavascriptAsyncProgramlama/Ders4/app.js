const request = new XMLHttpRequest();
request.addEventListener("readystatechange" , () => {
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        console.log(data);
    }else if(request.readyState === 4){
        console.log("Bir Hata Olustu");
    }
});
request.open("GET" , "https://jsonplaceholder.typicode.com/todos");
request.send();