let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:1, userName: "thurs", pass: "mokuyobi"}
];

export function login(pass, user) {
    user.find((u, i) => {
        if (u.userName === user) {
            console.log("red");
        }
    })
    return("logging in" + pass + ":" + user);
}