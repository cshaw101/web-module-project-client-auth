import React from "react";


export function Login() {

    const onSubmit = (e) => {
        e.preventDefault(e)
        console.log('im working')
        
    }



return(
<div>
    <nav>
    <ul>

        <li><a href="/login">LOGIN.</a></li>
        <li><a href="/friends">FRIENDSLIST.</a></li>
        <li><a href="/addfriend">ADDFRIEND.</a></li>
        <li><a href="/logout">LOGOUT.</a></li>
    </ul>
    </nav>
    <div>
    <h1>LOGIN</h1>
    
    <form onSubmit={onSubmit}>
  <label>
   USERNAME:
    <input type="text" name="name" />
  </label>
  <label>
    PASSWORD:
  <input type="password" name="password" />
  </label>
  <input type="submit" value='submit' />
</form>
</div>
</div>
)
}