const response = async () => {
    const responseData = await fetch('https://jsonplaceholder.typicode.com/todos');
    if(responseData.status === 200){
        const data = await responseData.json();
        return data;
    }else{
        throw new Error('Bir Hata Olustu');
    }
}
response().then((data) => {
    localStorage.setItem('todos' , JSON.stringify(data));
    let todos = localStorage.getItem('todos');
    console.log(todos)
}).catch((error) => {
    console.log(error);
})