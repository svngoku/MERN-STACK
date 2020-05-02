import React from "react";

const UserTable = (props) => {
    const renderUserField = (user) => (
        <tr key={ user._id }> <td>{user.ID}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.login}</td>
            <td>
                <button className="button muted-button" onClick={() => {props.editRow(user)}} className="button muted-button">Edit</button>
                <button className="button muted-button">Delete</button>
            </td>
        </tr>
    );
    
    return (
        <div>
            <table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ( props.users && props.users.length > 0 ) ? (
                            props.users.map(user => renderUserField(user))
                        ) : (
                        <tr>
                            <span role="img" aria-label="failed men" colSpan={5}>No users found 😵</span>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;