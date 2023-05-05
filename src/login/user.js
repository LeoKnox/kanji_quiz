let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:1, userName: "thurs", pass: "mokuyobi"}
];

export function login(pass, use) {
    user.find((u) => {
        if (u.userName === use) {
            console.log("red");
        }
    })
    return("logging in" + pass + ":" + use);
}