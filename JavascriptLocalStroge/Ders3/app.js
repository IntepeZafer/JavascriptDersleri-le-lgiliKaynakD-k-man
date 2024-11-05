const response = async () => {
    const responseData = await fetch('./example/can.json');
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
}).then(() => {
    response('./example/osman.json').then((data) => {
        localStorage.setItem('todos' , JSON.stringify(data));
        let todos = localStorage.getItem('todos');
        console.log(todos)
    }).then(() => {
        response('./example/tuba.json').then((data) => {
            localStorage.setItem('todos' , JSON.stringify(data));
            let todos = localStorage.getItem('todos');
            console.log(todos)
        })
    })
})