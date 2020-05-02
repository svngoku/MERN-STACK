import React, { useState, useEffect } from "react";

const EditUserForm = props => {
    useEffect(() => {
        setUser(props.currentUser)
    }, [props])

    const [user, setUser] = useState(props.currentUser)
    const handleInputChange = event => {
      const { firstname, value } = event.target
      setUser({ ...user, [firstname]: value })
    }

    return (
        <form onSubmit={
            event => {
                event.preventDefault()
                props.updateUser(user.ID, user)
        }}>
            <label>Name</label>
            <input type="text" name="firstname" value={user.firstname} onChange={handleInputChange} placeholder="Enter firstname" />

            <label>Last name</label>
            <input type="text" name="lastname" value={user.lastname} onChange={handleInputChange} placeholder="Enter lastname" />

            <button className="round-button">Update user infos</button>
            <button className="round-button" onClick={() => props.setEditing(false)}>Cancel</button>
            
        </form>
    )
}


export default EditUserForm;