const getTodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange" , () => {
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText);
            callback(undefined , data);
        }else if(request.readyState === 4){
            callback('Bir Hata Olustu' , undefined);
        }
    });
    request.open("GET" , "https://jsonplaceholder.typicode.com/todos");
    request.send();
};
getTodos((error , data) => {
    try{
        if(error){
            console.log(error);
        }else{
            console.log(data);
        }
    }catch(e){
        console.log(e);
    }
});
