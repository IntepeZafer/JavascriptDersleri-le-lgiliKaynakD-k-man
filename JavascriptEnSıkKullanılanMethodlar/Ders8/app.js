const students = [
    {name : "Can" , points : 10},
    {name : "Cem" , points : 20},
    {name : "Ali" , points : 30},
    {name : "Veli" , points : 40},
    {name : "Ayşe" , points : 50},
    {name : "Fatma" , points : 60},
    {name : "Ömer" , points : 70},
    {name : "Ebru" , points : 80},
    {name : "Zeynep" , points : 90},
    {name : "Ahmet" , points : 100}
];
const studentPoints = students.filter((item) => {
    if(item.points >= 50) {
        return item;
    }
}).map((item) => {
    return item
}).forEach((item) => {
    console.log(`Öğrenci Ad: ${item.name} - Puan: ${item.points}`);
});