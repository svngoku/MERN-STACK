import React, { useState } from "react";
import Modal from "../layouts/modalComponent";

const UserTable = (props) => (
    <div>
        <Modal />
    <table>
        <thead>
            <tr>
               <th>ID</th>
                <th>Name</th>
                <th>Username</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            { props.users.length > 0 ? (
                props.users.map( user =>
            <tr>
                <td>{user.ID}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>
                <button className="button muted-button" data-toggle="modal" data-target="#exampleModal">Edit</button>
                <button className="button muted-button">Delete</button>
                </td>
            </tr>
            )) : (
              <tr>
                <td colSpan={3}>No users found 😵</td>
              </tr>
            )}
        </tbody>
    </table>
</div>
);

export default UserTable;