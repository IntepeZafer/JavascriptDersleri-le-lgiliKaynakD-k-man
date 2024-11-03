const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = points.findIndex((index) => {
    if(index == 10){
        return index;
    }
});
points[result] = 100;
console.log(points);
const studentArray = [
    {name : "Can" , points : 10},
    {name : "Cem" , points : 20},
    {name : "Ali" , points : 30},
    {name : "Veli" , points : 40}
];
const result2 = studentArray.findIndex((index) => {
    index.points += 10;
    if(index.name === "Ali") {
        return true;
    }
});
if(result2 !== -1) {
    studentArray[result2].name = "Ahmet";
}
console.log(studentArray);