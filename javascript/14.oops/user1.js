class user1{

userName ="Deepak"
userEmail ="deepak123@gmail.com";
#userPass ="12345";

get getPass(){
    return ` UserName :${this.userName} and password ${this.#userPass}`
}
set setpass(hack){
       this.#userPass = hack;
}}

const app = new user1;
app.userName = "chaudhary"; 
console.log(app.userName);
 app.setpass ="09876";
 console.log(app.getPass);