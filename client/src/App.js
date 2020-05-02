import React, { useState, useEffect} from 'react';
import {
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./layouts/navbarComponent";
import UserTable from "./tables/UserTable";
import UserCreate from "./forms/userCreate";
import EditUserForm from "./forms/userEdit";
import userService from "./services/userService";
// import Modal from "./layouts/modalComponent";
import PartenaireComponent from "./layouts/partenaireComponent";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  const [users, setUsers] = useState(null);
  const [editing, setEditing] = useState(false)
  const initialFormState = {
    ID: null,
    firstname: '',
    lastname: '',
  }
  const [currentUser, setCurrentUser] = useState(initialFormState)

  useEffect(() => {
    if(!users) {
      getUsers();
    } 
  });

  const getUsers = async () => {
    let res = await userService.getAll();
    setUsers(res);
  };

  const addUser = user => {
    user.ID = users.length + 1;
    setUsers([...users, user]);
  };
  
  const updateUser = (id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.ID === id ? updatedUser : user)))
  }

  const editRow = user => {
    setEditing(true)
    setCurrentUser({ ID: user.id, firstname: user.firstname, lastname: user.lastname })
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.ID !== id))
  };

  return (
    <div>
      <Switch>
        <Route path="/" exact />
        <Route path="/partenaire" component={PartenaireComponent} />
      </Switch>
      <Navbar />
      <div className="container">
      <h1 className="vertical-center">CRUD App </h1>
        <GlobalProvider value={"listUser"}>
        <div className="flex-row">
          <div className="flex-large">
           {editing ? (
              <div>
                <h2>Edit user</h2>
                <EditUserForm
                  setEditing={setEditing}
                  currentUser={currentUser}
                  updateUser={updateUser}
                />
              </div>
            ) : (
              <div>
                <h2>Add user</h2>
                <UserCreate addUser={addUser}  />
              </div>
            )}
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
          </div>
        </div>
        </GlobalProvider>
      </div>
    </div>
  );
}

export default App;
