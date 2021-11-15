import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton, Stack } from "@mui/material";
import { Grid } from "@mui/material";

export default function IdeaCard(props) {
  const {
    id,
    idea_type,
    risk_category,
    currency_in,
    name_of_the_idea,
    stoploss_at,
    book_profit_near,
    up_or_down_side_in_percent,
    created_by,
    subscribers_count,
    is_subscribed,
  } = props.idea;
  const { flag, subscribe } = props;
  console.log(props);
  return (
    <Card sx={{ minWidth: 345, marginBottom: 5, marginTop: 5 }}>
      <CardContent>
        <Stack direction="row" justifyContent="space-around" spacing={2}>
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: "blue",
              borderRadius: 4,
            }}
          ></div>

          <Typography
            gutterBottom
            variant="Button"
            component="div"
            style={{ fontWeight: "bold" }}
          >
            {created_by}
          </Typography>
          <IconButton>
            <NotificationsIcon />
          </IconButton>
        </Stack>

        <hr />
        <Stack direction="row" justifyContent="space-between" spacing={0}>
          <Typography variant="title" gutterBottom>
            {name_of_the_idea}
          </Typography>
          <Button
            variant="contained"
            size="small"
            disabled={is_subscribed}
            onClick={(e) => subscribe(flag, id)}
          >
            {!is_subscribed ? "Join this idea" : "joined"}
          </Button>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ marginBottom: 5 }}
        >
          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "red",
              borderRadius: "10%",
              width: 20,
              height: 20,
            }}
          >
            {risk_category}
          </Button>
        </Stack>
        <Grid container direction="row" spacing={10}>
          <Grid item xs={6}>
            <Typography>Enter below</Typography>
            <Typography>Book proft near</Typography>
            <Typography>stop loss at</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              color="blue"
              style={{ alignItems: "flex-end", float: "right" }}
            >
              {up_or_down_side_in_percent * book_profit_near}
            </Typography>
            <div></div>
            <Typography color="blue" style={{ float: "right", clear: "right" }}>
              {book_profit_near}
            </Typography>
            <Typography
              color="blue"
              style={{ alignItems: "flex-end", float: "right", clear: "right" }}
            >
              {stoploss_at}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
