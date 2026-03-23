class appex4{
     showDetail(name,email,mobile,img){
     return `<div class="card">
    <div class="cont">
        <h1>Name :${name} </h1>
        <h1>Email :${email}</h1>
        <h1>Mobile :${mobile}</h1>
    </div>
    <div class="img"><img src="${img}" width= "146px" height= "146px" alt="#"></div>
  </div> `;
     }
}
const app = new appex4;
