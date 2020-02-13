import React from 'react';
import Navbar from "./layouts/navbarComponent";
import UserTable from "./tables/UserTable";
import UserCreate from "./forms/userCreate";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
      <h1 className="vertical-center">CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <UserCreate  />
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
