let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:2, userName: "thurs", pass: "mokuyobi"},
    {id:3, userName: "a", pass: "a"}
];

export function login(pass, use) {
    let newUser = user.find(u => u["userName"] === use);
    console.log(newUser);
    if (newUser !== -1) {
        console.log("match");
    }
    /*
    user.find((u, i) => {
        console.log("1"+use);
        console.log("2"+u["userName"]);
        if (u["userName"] === use) {
            console.log("pass:"+u.pass+":"+pass);
            /*
            if(u.pass == pass) {
                //return (user[i]);
                return ("logged in");
            } else {
                return("wrong");
            }
           u.pass && pass ? console.log("true") : console.log("false");
        } else {
            return("no user");
        }
    })
        */
    //return("logging in" + pass + ":" + use);
}