import { login } from './user.js';
import { useState } from 'react';

function ConfirmPassword({param}) {
    const [user, setUser] = useState("");
    const [pass, setPass] = useState("");

    function upDate(event) {
        if (event.target.name === "userName") {
        setUser(event.target.value);
        }
        if (event.target.name === "pass") {
        setPass(event.target.value);
        }
    }

    function formSubmit(event) {
        param("red");
        event.preventDefault();
        console.log("form submit");
        param("<"+login(pass, user)+" />");
    }

    return(
        <>
            <form onSubmit={formSubmit}>
                <label>User:</label>
                <input name="userName" type="text"  onChange={upDate} value={user} />
                <input name="pass" type="text"  onChange={upDate} value={pass} />
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default ConfirmPassword;