const head =()=>{
   document.write(`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>User Management </title>
</head>

<body>`) 
};

// header
const header =()=>{
    document.write(`  <tr>
            <td height="100px" bgcolor="#899cf0" colspan="2">
                <font color="white">
                    <h1>&nbsp;&nbsp;&nbsp;&nbsp; 🏆 BIGSTOCK</h1>
                </font>
            </td>
        </tr>`)
}
// left side
const left =()=>{
    document.write(` 
            <td width="75%" height="720px">
                <img src="image/main0.jpg" width="100%" height="500px" alt="">
                <p align="justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et accusantium corrupti
                    eligendi dolor
                    aperiam ad cupiditate sapiente. Non at a cumque dolor, culpa facere accusantium corporis natus fuga
                    veniam! Est sequi natus ab omnis id et ipsam eaque, modi suscipit adipisci qui officiis, nulla vero
                    incidunt consequuntur cupiditate iure dolorum repudiandae, asperiores unde obcaecati. Dignissimos
                    obcaecati harum provident exercitationem, illum dolorum aliquam, amet quo veniam possimus
                    repudiandae non natus dolor ad. Quae quibusdam dignissimos nam cumque maxime eaque facere provident
                    quam quod repudiandae cupiditate maiores labore illum, minus rem magni reiciendis asperiores omnis
                    explicabo nulla iste alias, nemo, et sequi! Quod quo odio rem saepe, beatae quibusdam, eum eos,
                    doloribus veniam voluptatum ullam mollitia error fuga in consectetur amet sapiente eius suscipit
                    exercitationem unde quam et! Corrupti deleniti impedit quod voluptas reiciendis maiores explicabo
                    dolorum iusto aliquam optio, nostrum, aliquid repellat minus dolorem cupiditate dolores quisquam
                    autem nihil eligendi molestias et adipisci. Recusandae error sapiente ex dolores neque quibusdam
                    exercitationem saepe ipsa animi? Perspiciatis provident, illo nesciunt amet ut possimus porro dicta
                    assumenda in ea obcaecati voluptates reiciendis ipsam laborum cupiditate error, ex quisquam, aperiam
                    accusantium odio deserunt officia neque esse maxime? Veritatis molestiae impedit minima maxime animi
                    quo! Laboriosam.</p>

            </td>`)
};

// right side
const right=()=>{
    document.write(` <td width="25%" bgcolor="whitesmoke">
                <!-- login form -->
                <table border="0" width="100%" height="350px" bgcolor="#f3fafd" align="center">
                    <tr>
                        <td align="center">
                            <form method="get" action="profile.html">
                                <img src="image/apprentice.png" width="100px" height="100px" alt="logo">
                                <p><input type="email" name="userEmail" placeholder="Enter Email Id" required></p>
                                <p><input type="password" name="userPass" placeholder="Enter password" required></p>
                                <p><input type="submit" name="login" value="Login Now"></p>
                                <a href="register.html">Create New Account</a>
                            </form>

                        </td>
                    </tr>
                </table>
                <!-- login form -->
            </td>`)
}
//  footer
const footer = ()=>{
    document.write(` <tr>
            <td height="80px" bgcolor="#899cf0" colspan="2">
                <h3> &nbsp;&nbsp;&nbsp;&nbsp;COPYRIGHT&copy;2025</h3>
            </td>
        </tr>
    </table>
    <script src="advancefunctionex2.js"></script>
</body>

</html>`)
}