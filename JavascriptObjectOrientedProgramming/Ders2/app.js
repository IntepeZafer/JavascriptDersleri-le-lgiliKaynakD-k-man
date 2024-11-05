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

const user = new User("Eric" , "Cartman" , 20 , "eric.cartman@gmail");
console.log(user);
console.log(user.login());
console.log(user.logout());