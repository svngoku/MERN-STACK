import React, { useState } from 'react';

const PartenaireCreate = props => {

    const initialFormState = {
        ID: null,
        firstname: "",
        lastname: "",
        login: ""
    }
    const [partenaire, setPartenaire] = useState(initialFormState);

    const handleInputChange = event => {
        const { name, value } = event.target
        setPartenaire({ ...partenaire, [name]: value })
    }

  return (
    <form 
        onSubmit={
            event => {
                event.preventDefault();
                if( !user.firstname || !user.lastname ) return 
                props.addUser(user);
                setUser(initialFormState);
            }
        }
    >
    <label>Name</label>
      <input type="text" name="firstname" value={user.firstname} onChange={handleInputChange} placeholder="Enter firstname" />

      <label>Last name</label>
      <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} placeholder="Enter lastname" />

      <label>Password</label>
      <input type="password" name="password" onChange={handleInputChange} placeholder="Enter password" />

      <button className="round-button" >Add new user</button>
    </form>
  )
}

export default UserCreate;