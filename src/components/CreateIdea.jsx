import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Stack, Chip, TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const risk_categories = [
  { label: "High", value: "H" },
  { label: "Low", value: "L" },
  { label: "Medium", value: "M" },
];

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CreateIdea(props) {
  const [open, setOpen] = React.useState(false);

  const [fields, setFields] = React.useState({
    idea_type: "",
    risk_category: "",
    currency_in: "IR",
    name_of_the_idea: "",
    stoploss_at: "",
    book_profit_near: "",
    up_or_down_side_in_percent: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (e) => {
    setFields({ ...fields, risk_category: e.target.value });
  };
  return (
    <div>
      <Button variant="standard" onClick={handleClickOpen}>
        Add Idea
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        minWidth="lg"
        fullWidth
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Create Trade Idea
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Stack direction="row">
            <Chip
              color={fields.idea_type === "B" ? "primary" : "default"}
              label="Crypto"
              style={{ width: 200 }}
              variant={"standard"}
              onClick={(e) => setFields({ ...fields, idea_type: "B" })}
            />
            <Chip
              color={fields.idea_type === "S" ? "primary" : "default"}
              label="Stocks"
              variant={"standard"}
              onClick={(e) => setFields({ ...fields, idea_type: "S" })}
              style={{ width: 200 }}
            />
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
            <TextField
              label="Name of the idea"
              onChange={(e) =>
                setFields({ ...fields, name_of_the_idea: e.target.value })
              }
            />
            <Chip
              label="upside by 5%"
              variant={"standard"}
              onClick={(e) =>
                setFields({ ...fields, up_or_down_side_in_percent: "5" })
              }
            />
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Select Risk"
              value={fields.risk_category}
              onChange={handleChange}
              helperText="Please select risk"
            >
              {risk_categories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Stack>
          <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
            <TextField
              label="Target"
              onChange={(e) =>
                setFields({ ...fields, book_profit_near: e.target.value })
              }
            />
            <TextField
              label="Stop Loss At"
              onChange={(e) =>
                setFields({ ...fields, stoploss_at: e.target.value })
              }
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button autoFocus variant="outlined" onClick={handleClose}>
            cancel
          </Button>
          <Button
            autoFocus
            variant="standard"
            color="primary"
            onClick={(e) => {
              props.addIdea(fields);
            }}
          >
            create
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
