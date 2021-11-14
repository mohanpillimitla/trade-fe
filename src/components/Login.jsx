import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";

export default function Login(props) {
  const [fields, setFields] = React.useState({
    username: "",
    password: "",
  });
  const handleChange = (event, label) => {
    setFields({ ...fields, [label]: event.target.value });
  };
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          LOGIN
        </Typography>
      </CardContent>
      <Grid container justifyContent="space-around">
        <Grid item>
          <TextField
            id="standard-password-input"
            label="Username"
            value={fields.username}
            type="string"
            autoComplete="current-password"
            variant="standard"
            fullWidth
            onChange={(e) => handleChange(e, "username")}
            style={{ margin: 10 }}
          />
        </Grid>
        <Grid item>
          <TextField
            id="standard-password-input"
            label="Password"
            type="password"
            value={fields.password}
            autoComplete="current-password"
            variant="standard"
            onChange={(e) => handleChange(e, "password")}
            fullWidth
            style={{ margin: 10 }}
          />
        </Grid>
        <Button
          style={{ margin: 20 }}
          color="primary"
          variant="contained"
          fullWidth
          disabled={!fields.username || !fields.password}
          onClick={(e) => props.login(fields.username, fields.password)}
        >
          login
        </Button>
      </Grid>
    </Card>
  );
}
