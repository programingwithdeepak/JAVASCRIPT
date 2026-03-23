class appex5{

 marke(img,name,price) {
     return` <div class="card">
        <img src="${img} alt="Supermarket" class="card-img">
        <div class="card-content">
            <h2>${name}</h2>
            <h3> ₹.  ${price}</h3>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ullam
                doloremque quibusdam accusantium consequatur nihil earum sunt blanditiis
                libero provident sapiente dolore, sequi harum totam omnis. Illum ipsa
                voluptas ratione.
            </p>
        </div>
    </div>`  ;     
    }
}
const app =new appex5;