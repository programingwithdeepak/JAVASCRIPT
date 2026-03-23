class Oopex1{
    data ="welcome";
    user(data){
        return `${this.data} user  ${data}`;
    }
}
const app = new Oopex1;
console.log(app.data);
console.log(app.user("deepak"));