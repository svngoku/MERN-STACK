import React, { useState } from 'react';
import Navbar from "./layouts/navbarComponent";
import UserTable from "./tables/UserTable";
import UserCreate from "./forms/userCreate";
import ArticleEditor from "./layouts/editorComponent";
function App() {

  const userData = [
    {  ID: 1,
      name: "DOE",
      username: "Jonh DOE" 
    },
    {  
      ID: 2,
      name: "Marie",
      username: "Marie DOE" 
    },
  ];
  
  const [users, setUser] = useState(userData);

  const addUser = (user) => {
    user.ID = users.length + 1;
    setUser([...users, user]);
  }

  return (
  <div>
    <Navbar />
    <div className="container">
     <h1 className="vertical-center">CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <UserCreate addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} />
        </div>
      </div>
      <div className="flex-large">
          <h2>Article</h2>
          <ArticleEditor />
      </div>
    </div>
    </div>
  );
}

export default App;
