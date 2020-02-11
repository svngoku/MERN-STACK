import React, { useState } from 'react';

const UserCreate = props => {
    const initialFormState = { 
        ID: null, 
        name: '', 
        username: '',

    };
    
    const [user, setUser] = useState(initialFormState);
    
    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }
  return (
    <form 
        onSubmit={
            event => {
                event.preventDefault();
                if(!user.name || !user.username ) return ;
                props.addUser(user);
                setUser(initialFormState);
            }
        }
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder="Enter name" />

      <label>Last name</label>
      <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} placeholder="Enter lastname" />

      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} placeholder="Enter username" />

      <label>Password</label>
      <input type="password" name="password" onChange={handleInputChange} placeholder="Enter password" />

      <button className="round-button" >Add new user</button>
    </form>
  )
}

export default UserCreate;