import { React, useEffect } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router";
import CreateIdea from "../components/CreateIdea";
export default function NavBar(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (props.username) navigate("/home");
  }, [props.username]);
  return (
    <Grid item container xs={12}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TradeApp
          </Typography>
          <CreateIdea addIdea={props.addIdea} />

          <Button color="inherit" onClick={() => navigate("/home")}>
            home
          </Button>
          <Button color="inherit" onClick={() => navigate("/my-ideas")}>
            my-ideas
          </Button>
          <Button
            color="inherit"
            onClick={() => alert(`hello ${props.username}`)}
          >
            {props.username}
          </Button>
        </Toolbar>
      </AppBar>
    </Grid>
  );
}
