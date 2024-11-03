const points = [];
for(let i = 0; i < 10; i++) {
    points.push(i);
}
points.filter((item) => {
    if(item % 2 === 0) {
        console.log(item);
    }
});
console.log("Silinen Veri: " , points.pop());