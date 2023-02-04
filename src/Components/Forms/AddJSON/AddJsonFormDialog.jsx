import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { data } from "../../../FamilyData/data";
import { toggleImportJson } from "../../../store/slices/dataSlice";
import { useDispatch } from "react-redux";
import { isJsonValid } from "../../../helpers/validators";

const defaultImportForJson = data;

const AddJsonFormDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const [jsonImport, setJsonImport] = useState("");

  const formattedJsonImport = (json) => eval(json);

  const importJsonHandler = (json) => {
    if (isJsonValid(json)) {
      dispatch(toggleImportJson(formattedJsonImport(json)));
      handleClose();
    } else {
      alert(
        "please enter a valid json, or move ahead with the default json we have"
      );
    }
  };
  const dialogMessage = `Make sure your json is of the format [{
    uid:<String> preferably an unique number //
    levelVisibility:<Boolean> preferably true for grandparent object //
    personalInformation:<Object> containing a key named children:<Array> of the same format as above mentioned json or an empty one//
  }]`;

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Import JSON</DialogTitle>
      <DialogContent>
        <DialogContentText>{dialogMessage}</DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="JSON"
          fullWidth
          variant="standard"
          multiline
          placeholder="copy-paste your json here"
          value={jsonImport}
          onChange={(e) => setJsonImport(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={() => importJsonHandler(jsonImport)}>Import</Button>
        <Button onClick={() => importJsonHandler(defaultImportForJson)}>
          Move ahead with default JSON
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddJsonFormDialog;
