import MyHome from './myHome.js';

let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:2, userName: "thurs", pass: "mokuyobi"},
    {id:3, userName: "a", pass: "a"}
];

export function login(pass, use) {
    let newUser = user.find(u => u["userName"] === use);
    console.log(newUser);
    if (newUser) {
        console.log("match");
        if  (newUser.pass === pass) {
            console.log("logged in");
            let x = <MyHome />;
            return(x);
        } else {
            console.log("failed password");
        }
    }
}