let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:1, userName: "thurs", pass: "mokuyobi"}
];

export function login(pass, use) {
    user.find((u, i) => {
        if (u.userName === use) {
            if(u.pass === pass) {
                return (user[i]);
            } else {
                return("wrong");
            }
        }
    })
    return("logging in" + pass + ":" + use);
}