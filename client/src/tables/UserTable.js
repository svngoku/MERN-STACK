import React, { useState, useEffect } from "react";
import Modal from "../layouts/modalComponent";
import userService from "../services/userService";

const UserTable = () => {
    const [users, setUser] = useState(null);

    useEffect(() => {
        if(!users) {
            getUsers();
        } 
    });

    const getUsers = async () => {
        let res = await userService.getAll();
        console.log(res);
        setUser(res);
    };

    const renderUserField = (user) => (
        <tr key={ user._id }> <td>{user.ID}</td>
            <td>{user.firstname}</td>
            <td>{user.lastname}</td>
            <td>{user.login}</td>
            <td>
                <button className="button muted-button" data-toggle="modal" data-target="#exampleModal">Edit</button>
                <button className="button muted-button">Delete</button>
            </td>
        </tr>
    );
    
    return (
        <div>
            <Modal />
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
                        ( users && users.length > 0 ) ? (
                            users.map(user => renderUserField(user))
                        ) : (
                        <tr>
                            <td colSpan={5}>No users found 😵</td>
                        </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;