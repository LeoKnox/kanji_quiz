let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:1, userName: "thurs", pass: "mokuyobi"}
];

export function login(pass, use) {
    user.find((u, i) => {
        if (u.userName === use) {
            console.log("pass:"+u.pass+":"+pass);
            /*
            if(u.pass == pass) {
                //return (user[i]);
                return ("logged in");
            } else {
                return("wrong");
            }
            */
           u.pass && pass ? console.log("true") : console.log("false");
        } else {
            return("no user");
        }
    })
    //return("logging in" + pass + ":" + use);
}