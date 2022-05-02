import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Users from "./components/Users";
import Posts from "./components/Posts";
import CreateNewPost from "./components/CreateNewPost";

const App = () => {
  const [selectedUser, setSelectedUser] = useState<number | undefined>();
  return (
    <div className="app">
      <Header />
      <div className="app__content">
        <Users setSelectedUser={setSelectedUser} selectedUser={selectedUser} />
        <Posts selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        <CreateNewPost />
      </div>
    </div>
  );
};

export default App;
