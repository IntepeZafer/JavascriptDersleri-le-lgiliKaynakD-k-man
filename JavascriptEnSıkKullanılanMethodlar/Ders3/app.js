const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const result = points.reduce((total, item) => {
    if(item % 2 === 0) {
        total++;
    }
    return total;
} , 0);
console.log(result);

const students = [
    {name : "Can" , points: 10},
    {name : "Cem" , points: 20},
    {name : "Ali" , points: 30},
    {name : "Veli" , points: 40},
    {name : "Ayşe" , points: 50},
    {name : "Fatma" , points: 60},
    {name : "Ömer" , points: 70},
    {name : "Ebru" , points: 80},
    {name : "Zeynep" , points: 90},
    {name : "Ahmet" , points: 100}
];
const result2 = students.reduce((total , item) => {
    if(item.points >= 50) {
        total.push(item);
    }
    return total
} , [])
result2.forEach((item) => {
    console.log(`Öğrenci Ad: ${item.name} - Puan: ${item.points}`);
})