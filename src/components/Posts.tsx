import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { PostsResponse } from "../utils/interfaces/index";
import { fetchPosts } from "../utils/apiPosts";
import "./Posts.css";

interface Props {
  selectedUser?: number;
  setSelectedUser: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const Posts = (props: Props) => {
  const { selectedUser, setSelectedUser } = props;
  const [posts, setPosts] = useState<PostsResponse[]>();
  const [inputValue, setInputValue] = useState<string | undefined>(
    selectedUser?.toString()
  );
  const [isValid, setIsValid] = useState<boolean>(false);

  useEffect(() => {
    selectedUser && setInputValue(selectedUser.toString());
    validateInput(selectedUser);
  }, [selectedUser]);

  const validateInput = (value: any) => {
    if (!!Number(value) || value === undefined || value === "") {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const getPosts = async () => {
    try {
      const response: any = await fetchPosts(inputValue);
      setPosts(response);
      setSelectedUser(undefined);
    } catch (e: any) {
      console.log(JSON.stringify(e));
    }
  };

  const displayUsers = (posts?: PostsResponse[]) => {
    const userLabel = posts?.map((post: PostsResponse, index: number) => {
      return (
        <div>
          <span>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </span>
        </div>
      );
    });
    return userLabel && <div className="postsList">{userLabel}</div>;
  };

  const handleOnChange = (value: string) => {
    validateInput(value);
    setInputValue(value);
  };

  console.log("posts:", posts);
  console.log("value:", inputValue);

  return (
    <div
      style={{
        width: "33%",
      }}
    >
      <h1>Posts</h1>

      <TextField
        error={!isValid}
        style={{ display: "flex" }}
        id="filled-error-helper-text"
        placeholder="Insert User ID and Press Search"
        size="small"
        onChange={(e) => handleOnChange(e.target.value)}
        required
        value={inputValue}
        InputProps={{
          endAdornment: (
            <Button
              onClick={getPosts}
              disabled={!isValid}
              data-testid="convertButton"
            >
              <SearchIcon />
            </Button>
          ),
        }}
      />
      {!isValid && (
        <div className="validationMessage">
          The input type is wrong please follow the instructions in the
          placeholder
        </div>
      )}
      {displayUsers(posts)}
    </div>
  );
};

export default Posts;
