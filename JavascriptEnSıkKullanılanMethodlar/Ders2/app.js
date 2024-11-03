const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newPoints = points.map((item) => {
    return item + 10;
});
console.log(newPoints);

const students = [
    {name : "Can" , points : 10},
    {name : "Cem" , points : 20},
    {name : "Ali" , points : 30},
    {name : "Veli" , points : 40}
];
const newStudents = students.map((item) => {
    return `${item.name} - ${item.points + 10}`;
});
console.log(newStudents);