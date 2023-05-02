let user = [
    {id:1, userName: "mon", pass: "getsuyobi"},
    {id:1, userName: "thurs", pass: "mokuyobi"}
];

export function login(event, pass) {
    event.preventDefault();
    console.log("logging in" + event.target.value);
}