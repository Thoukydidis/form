import { Button } from "@mui/material";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { UsersResponse } from "../utils/interfaces/index";
import { fetchUsers } from "../utils/api";
import "./Users.css";

export interface Props {
  setSelectedUser: React.Dispatch<React.SetStateAction<number | undefined>>;
  selectedUser: number | undefined;
}
const Users = (props: Props) => {
  const { setSelectedUser, selectedUser } = props;
  const [users, setUsers] = useState<UsersResponse[]>();

  const getUsers = async () => {
    try {
      const response: any = await fetchUsers();
      setUsers(response);
    } catch (e: any) {
      console.log(JSON.stringify(e));
    }
  };
  const handleClick = (id: number) => {
    setSelectedUser(id);
  };

  const displayUsers = (users?: UsersResponse[]) => {
    const userLabel = users?.map((user: UsersResponse, index: number) => {
      return (
        <div>
          <button
            data-testid="getUsersButton"
            onClick={() => handleClick(user.id)}
            style={
              selectedUser === user.id
                ? { display: "flex", width: "100%", backgroundColor: "gray" }
                : { display: "flex", width: "100%" }
            }
          >
            <p style={{ padding: "7px" }}>{user.id}</p>
            <p style={{ padding: "7px" }}>{user.name}</p>
          </button>
        </div>
      );
    });
    return userLabel && <div className="usersList">{userLabel}</div>;
  };
  console.log("selectedUser:", selectedUser);
  return (
    <div style={{ width: "15%", marginRight: "15px" }}>
      <h1>Users</h1>
      <Button onClick={getUsers} data-testid="convertButton">
        Get Users
        <SearchIcon />
      </Button>
      {displayUsers(users)}
    </div>
  );
};

export default Users;
