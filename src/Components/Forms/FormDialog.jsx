import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { addNewFamilyMember } from "../../store/slices/dataSlice";
import { selectedIndividual } from "../../helpers/recursiveHelpers";

const defaultString = "";

const FormDialog = ({ open, handleClose }) => {
  const dispatch = useDispatch();
  const individual = selectedIndividual;
  const [parent, setParent] = useState(selectedIndividual);
  const { uid: parentUid, personalInformation = {} } = parent;
  const { name: parentName, children: familyMemberSiblings = [] } =
    personalInformation;
  const familyMemberUid = `${parentUid}.${familyMemberSiblings.length + 1}`;
  const [familyMemberName, setFamilyMemberName] = useState(defaultString);
  const [familyMemberSpouse, setFamilyMemberSpouse] = useState(defaultString);
  const [familyMemberLocation, setFamilyMemberLocation] =
    useState(defaultString);
  const [familyMemberBirthYear, setFamilyMemberBirthYear] =
    useState(defaultString);
  const [familyMemberPresentAddress, setFamilyMemberPresentAddress] =
    useState(defaultString);

  useEffect(() => {
    setParent(individual);
  }, [individual]);

  const addFamilyMemberHandler = () => {
    const familyMember = {
      uid: familyMemberUid,
      levelVisibility: true,
      personalInformation: {
        name: familyMemberName || `son/daughter of ${parentName}`,
        spouse: familyMemberSpouse,
        location: familyMemberLocation,
        birthYear: familyMemberBirthYear,
        presentAddress: familyMemberPresentAddress,
        children: [],
      },
    };
    dispatch(
      addNewFamilyMember({
        selectedIndividualUid: parentUid,
        newFamilyMember: familyMember,
      })
    );
    handleClose();
  };
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Add Family</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This family member is going to be the{" "}
          <li>son/daughter of {parentName}</li> and the same is going to be the
          default name of this individual if not entered manually
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Name"
          fullWidth
          variant="standard"
          value={familyMemberName}
          onChange={(e) => setFamilyMemberName(e.target.value)}
          placeholder={`son/daughter of ${parentName}`}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Spouse"
          fullWidth
          variant="standard"
          value={familyMemberSpouse}
          onChange={(e) => setFamilyMemberSpouse(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Location"
          fullWidth
          variant="standard"
          value={familyMemberLocation}
          onChange={(e) => setFamilyMemberLocation(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Birth Year"
          fullWidth
          variant="standard"
          value={familyMemberBirthYear}
          onChange={(e) => setFamilyMemberBirthYear(e.target.value)}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Present Address"
          fullWidth
          variant="standard"
          value={familyMemberPresentAddress}
          onChange={(e) => setFamilyMemberPresentAddress(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={addFamilyMemberHandler}>Add Family Member</Button>
      </DialogActions>
    </Dialog>
  );
};

export default FormDialog;
