function head(){
    document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="cmsex2.css">
</head>

<body>
<table border="1" cellspacing="0" align="center">`)
};

function header(){
    document.write(`
        <tr>
            <td colspan="5" height="100px" bgcolor="black">
                <font color="white">
                    <h1 id="my">&nbsp;&nbsp;My website </h1>
                </font>
            </td>
        </tr>`)
};
function nav(){
    document.write(`<tr align="center" bgcolor="gold" height="40px">
            <td width="20%"><a class="abc" href="home1.html">
                    <font> PAGE 1 </font>
                </a></td>
            <td width="20%"><a class="abc" href="home2.html">
                    <font> PAGE 2</font>
                </a></td>
            <td width="20%"><a class="abc" href="home3.html">
                    <font> PAGE 3 </font>
                </a></td>
            <td width="20%"><a class="abc" href="home4.html">
                    <font> PAGE 4</font>
                </a></td>
            <td width="20%"><a class="abc" href="home5.html">
                    <font> PAGE 5 </font>
                </a></td>
        </tr>`)
};
function left_side(){
    document.write(` <tr height="548px">
            <td colspan="4">
                <img src="https://images.unsplash.com/photo-1697089843672-eece9d6a7848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXBhZ2V8ZW58MHx8MHx8fDA%3D" alt="😊" width="100%" height="550px">
                <hr>
                <p id="p" align="justify">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error earum
                    consectetur esse consequatur iusto. Mollitia sit suscipit nemo voluptatem iure sequi quos voluptate.
                    Reprehenderit, sequi dolor architecto officiis incidunt voluptas, fugit ipsa assumenda rerum quidem
                    perferendis iure obcaecati autem! Eos quo sint amet unde repudiandae corporis autem voluptatum
                    eveniet possimus ducimus aut eaque, accusamus reiciendis laborum? Saepe itaque est tenetur. Tempora
                    molestias debitis ea harum possimus blanditiis, eveniet, reiciendis facere nisi officiis corrupti a
                    eos recusandae omnis ipsa. Vel voluptas consectetur exercitationem minus itaque quod corporis optio!
                    Eius explicabo amet, sed dolorem quis harum id laborum ipsa eveniet, veniam esse voluptatum
                    provident praesentium minus. Possimus aperiam et tempore illum eum quasi laborum, est vitae tenetur,
                    porro iure nemo quibusdam, aut quas rerum! Soluta minus, aliquam ipsa quam magnam nobis unde fugit
                    perspiciatis reiciendis quidem, repellendus, nihil dolorum! Ducimus amet facilis mollitia non sed
                    delectus sunt odit quod maiores ipsa nulla, accusamus laboriosam, adipisci vero pariatur nisi quidem
                    qui voluptas consectetur distinctio iure fugiat. Maiores consequuntur commodi voluptatem odit!
                    Possimus ratione, ad ducimus iusto corrupti autem asperiores optio unde itaque animi ea ab.
                    Asperiores hic provident officiis adipisci quae, sed, a doloribus autem repellendus beatae iure ab
                    atque quaerat voluptatum sunt natus, amet obcaecati inventore fugiat laborum rerum optio eaque!
                    Sunt, dolore! Optio debitis vero quae animi ab velit sapiente iure mollitia? Enim dolorum magni
                    nobis delectus quisquam perspiciatis, nulla explicabo neque maiores doloremque error ut impedit
                    omnis dolorem at animi, necessitatibus quidem quas libero pariatur quos similique recusandae? Unde,
                    ipsum.</p>

            </td>`)
};
function right_side(){
    document.write(` <td valign="top">
                <img src="https://images.unsplash.com/photo-1697089843672-eece9d6a7848?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9tZXBhZ2V8ZW58MHx8MHx8fDA%3D" alt="😊" width="100%" height="350px">
                <hr>
                <marquee id="marque" behavior="alternate" direction="right" scrollamount="5"> this is aside </marquee>
                <hr>
            </td>
        </tr>`)
};
function footer(){
    document.write(`<tr height="80px">
            <td colspan="5" align="left" bgcolor="black">
                <h4 id="copy">COPYRIGHT &copy; 2025 "PROJECT NAME"</h4>


            </td>
        </tr>
    </table>
</body>

</html>`)
}