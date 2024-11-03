const points = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newPoints = points.filter((item) => {
    if(item % 2 === 0) {
        return item;
    }
})
console.log(newPoints);
const students = [
    {name : "Can" , passed : true},
    {name : "Cem" , passed : true},
    {name : "Ali" , passed : false},
    {name : "Veli" , passed : false}
];
const passingStudents = students.filter((item) => {
    if(item.passed === true) {
        return item;
    }
})
console.log(passingStudents);