class User{
    constructor(firstName , lastName , age , email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    login(){
        console.log(`${this.firstName} ${this.lastName} is logged in`);
        return this;
    }
    logout(){
        console.log(`${this.firstName} ${this.lastName} is logged in`);
        return this;
    }
}
const user = new User("Eric" , "Cartman" , 20 , "eric.cartman@gmail");
const user2 = new User("Mark" , "Cartman" , 21 , "mark.cartman@gmail");
user.login().logout()

