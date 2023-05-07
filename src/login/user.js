let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:2, userName: "thurs", pass: "mokuyobi"},
    {id:3, userName: "a", pass: "a"}
];

export function login(pass, use) {
    user.find((u, i) => {
        if (user[i].userName === use) {
            console.log("pass:"+typeof(u.pass)+":"+typeof(pass));
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