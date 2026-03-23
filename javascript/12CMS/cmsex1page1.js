 //head
 function head(title){
    document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <link rel="stylesheet" href="cmsex1.css">
</head> 
<body>`)
 }
 
 // header
 function header(){
    document.write(`
   <header>
    <h1>MY website</h1>
   </header> `)
}

// nav
function nav(){

    let data = [
       {   page:"cmsex1page1.html" ,name:"Page1"},
       {  page:"cmsex1page2.html" ,name:"Page2"},
       {  page:"cmsex1page3.html" ,name:"Page3"},
       {   page:"cmsex1page4.html" ,name:"Page4"},
       {  page:"cmsex1page5.html" ,name:"Page5"}

    ];

    document.write(` <nav>`);
      for (let link of data) { 
      document.write(`<a href="${link.page}"> ${link.name}</a>`); 
    }
     document.write(`</nav>`);
}
//artical

function artical(){
    document.write(`<article>
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in!</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt corrupti, libero necessitatibus quis, aperiam quaerat blanditiis debitis alias, atque suscipit voluptatum? Iste saepe excepturi ex autem esse quaerat, totam dolores expedita illo quia soluta hic fuga consectetur minus quidem tempore itaque labore maxime laboriosam? Aliquid, molestiae! Eius eum voluptas sint odit aperiam dolorem nulla placeat inventore, nobis perspiciatis nostrum accusamus! Quis sapiente voluptatem iste harum doloremque tenetur dolores quaerat obcaecati! Enim laborum sequi earum natus aspernatur eveniet est voluptate, molestiae eaque repudiandae, nemo quam nostrum, vel labore qui? Optio porro illo deserunt dolorem tempora et delectus esse, architecto pariatur aliquam quisquam nulla molestias ullam debitis, quibusdam ea praesentium aut totam perspiciatis aspernatur facilis. Tempora laboriosam dolorum ad ducimus est magnam temporibus sint quibusdam similique ullam facere saepe nostrum, nesciunt accusamus quasi esse aliquam quisquam excepturi quo molestiae? Odit eum ex, est, exercitationem suscipit ducimus illum laborum minus, labore recusandae repudiandae! Aut hic aspernatur quidem suscipit eaque earum impedit velit sint dolore similique deleniti eius esse quibusdam unde consequuntur expedita dolorem obcaecati perspiciatis, quis et voluptates quisquam minima reprehenderit sed! Doloribus commodi quis doloremque non autem iste molestias, eius sapiente rerum natus hic distinctio. Tempore, saepe et praesentium ex ad perferendis neque aperiam possimus atque consectetur repellendus voluptas aut mollitia veniam asperiores quibusdam necessitatibus cumque inventore, corporis fugiat veritatis, quis accusantium. Repellendus sequi sed voluptas fuga consequuntur sapiente! Tenetur a tempora, quis aut voluptatibus doloremque maxime perspiciatis, magni voluptate consequuntur nostrum ullam recusandae unde illo reprehenderit voluptatum distinctio ut vitae optio?</p>
    </article>`)
}

//aside
function aside(){
    document.write(` <aside>
        <marquee behavior="alternate" direction="left"> welcome to cms</marquee>
    </aside>`)
}
// footer
function footer(){
    document.write(`<footer>
    <h1>copyright</h1>
   </footer>
 </body>
   
   </html>`)
}
