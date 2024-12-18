class User{
    constructor(firstName , lastName , age , email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    login(){
        return `${this.firstName} ${this.lastName} is logged in`;
    }
    logout(){
        return `${this.firstName} ${this.lastName} is logged out`;
    }
}

class Admin extends User{
    constructor(firstName , lastName , age , email , title){
        super(firstName , lastName , age , email);
        this.title = title;
    }
    deleteUser(user){
        users = users.filter(u => u.email !== user.email);
    }
}

const user = new User("Eric" , "Cartman" , 20 , "eric.cartman@gmail");
const admin = new Admin("Mark" , "Cartman" , 21 , "mark.cartman@gmail" , "Admin");
let users = [user , admin];
console.log(admin);
console.log(users)