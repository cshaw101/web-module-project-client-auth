
import React from "react";

const AddFriend = () => {

const onSubmit = (e) => {
    e.preventDefault()

}


return (
    <div>
    <h1>ADD FRIEND</h1>
    
    <form onSubmit={onSubmit}>
  <label>
   FRIEND NAME
    <input type="text" name="name" />
  </label>
  <label>
    FRIEND EMAIL
  <input type="password" name="password" />
  </label>
  <input type="button" value='submit'  />
</form>
</div>
)
}


export default AddFriend

//still need to connect the routes to display this page 