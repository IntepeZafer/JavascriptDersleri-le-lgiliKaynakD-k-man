const names = ["Can", "Cem", "Ali", "Veli"];
const points = [10, 20, 30, 40];
const students = [
    {name : "Can" , points : 10},
    {name : "Cem" , points : 20},
    {name : "Ali" , points : 30},
    {name : "Veli" , points : 40}
];

console.log(names.sort());
console.log(names.reverse());
console.log(points.sort());
console.log(points.reverse());
students.sort((a , b) => {
    if(a.points > b.points) {
        return -1;
    } else if(a.points < b.points) {
        return 1;
    } else {
        return 0;
    }
})
console.log(students);