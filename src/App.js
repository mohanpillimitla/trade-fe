import { React, useEffect, useState } from "react";

import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./Navigation/NavBar";
import axios from "axios";
import { Grid } from "@mui/material";
import { Ideas } from "./components/Ideas";
import { MyIdeas } from "./components/MyIdeas";

export default function App() {
  const login = async (username, password) => {
    await axios
      .post(`http://localhost:8001/token-auth/`, {
        username: username,
        password: password,
      })
      .then((response) => {
        setUserData(response.data);
      });
  };

  const getAllIdeas = async () => {
    axios
      .get("http://localhost:8001/idea/get_ideas/", {
        headers: {
          Authorization: `JWT ${userData && userData["token"]}`,
        },
      })
      .then((res) => SetAllIdeas(res.data));
  };

  const getMyIdeas = async () => {
    axios
      .get("http://localhost:8001/idea/get_ideas/get_user_ideas/", {
        headers: {
          Authorization: `JWT ${userData && userData["token"]}`,
        },
      })
      .then((res) => setMyIdeas(res.data));
  };
  const subscribe = async (flag, id) => {
    axios
      .put(`http://localhost:8001/idea/create_ideas/${id}/`,{subscriber:[id]}, {
        headers: {
          Authorization: `JWT ${userData && userData["token"]}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => (!flag ? getMyIdeas() : getAllIdeas()));
  };

  const [userData, setUserData] = useState(null);
  const [AllIdeas, SetAllIdeas] = useState(null);
  const [myIdeas, setMyIdeas] = useState(null);

  return (
    <Grid
      container
      justifyContent="space-around"
      alignItems="center"
      alignSelf="center"
      spacing={2}
    >
      <NavBar username={userData && userData.user.username} />
      <Routes>
        <Route path="/" element={<Login login={login} />} />
        <Route
          path="home/"
          element={
            <Ideas
              userData={userData}
              AllIdeas={AllIdeas}
              getAllIdeas={getAllIdeas}
              subscribe={subscribe}
            />
          }
        />
        <Route
          path="my-ideas"
          element={
            <MyIdeas
              userData={userData}
              myIdeas={myIdeas}
              getMyIdeas={getMyIdeas}
              subscribe={subscribe}
            />
          }
        />
      </Routes>
    </Grid>
  );
}
