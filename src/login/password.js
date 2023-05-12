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
        param(login(pass, user));
    }

    return(
        <>
            <form onSubmit={formSubmit}>
                <table style={{justifyItems: "center"}}>
                    <tr>
                        <td>User: </td>
                        <td><input name="userName" type="text"  onChange={upDate} value={user} /></td>
                    </tr>
                    <tr>
                        <td>Password: </td>
                        <td><input name="pass" type="text"  onChange={upDate} value={pass} /></td>
                    </tr>
                </table>
                <input type="submit" value="Login" />
            </form>
        </>
    )
}

export default ConfirmPassword;