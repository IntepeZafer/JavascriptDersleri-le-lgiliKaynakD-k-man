let student = {
    Name : "Eric",
    firstName : "Cartman",
    Age : 20,
    Email : "deneme@gmail.com",
    Class : "12-A",
    Lessons : [
        "Mathematical",
        "English",
        "Science",
        "History",
        "Geography"
    ],
    login(){
        console.log("Login Successful");
    },
    logout(){
        console.log("Logout Successful");
    },
    printLesson(){
        console.log(this.Lessons);
    }
};
console.log(student)
student.login();
student.printLesson()
student.Lessons.forEach((student) => {
    console.log(student);
})