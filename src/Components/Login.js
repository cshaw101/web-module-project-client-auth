import React from "react";


export function Login() {

    const onSubmit = (e) => {
        e.preventDefault()
        
    }



return(
<div>
    <nav>
    <ul>

        <li><a href="#Login">LOGIN.</a></li>
        <li><a href="#FriendsList">FRIENDSLIST.</a></li>
        <li><a href="#jobs">ADDFRIEND.</a></li>
        <li><a href="#jobs">LOGOUT.</a></li>
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
  <input type="button" value='submit'  />
</form>
</div>
</div>
)
}