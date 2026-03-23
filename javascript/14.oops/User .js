class User {

  id = 1;                                
  name = "Deepak";                         
  active = true;                           
  tech = ["HTML", "CSS", "JavaScript"];    
  address = { city: "Delhi", country: "India" };  

  showId(){
    return `ID: ${this.id}`;
  }

   showName(){
    return `Name: ${this.name}`;
  }

   showActive(){
    return `active: ${this.active}`;
  }

   showTech(){
    return `tech: ${this.tech}`;
  }

   showAddress(){
    return `address: ${this.address}`;
  }

  
}

const user1 = new User();
console.log(user1.showId());
console.log(user1.showName());
console.log(user1.showActive());
console.log(user1.showTech());
console.log(user1.showAddress());

