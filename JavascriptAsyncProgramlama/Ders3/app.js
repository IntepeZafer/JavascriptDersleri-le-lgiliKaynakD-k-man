const request = new XMLHttpRequest();
request.addEventListener("readystatechange" , () => {
    if(request.readyState === 4 && request.status === 200){
        const data = JSON.parse(request.responseText);
        console.log(data);
    }
});
request.open("GET" , "https://jsonplaceholder.typicode.com/todos");
request.send();