import * as React from "react";
import Button from "@mui/material/Button";
import FormDialog from "../Forms/FormDialog";

export default function AddFamily({isDisabled}) {
  const [open, setOpen] = React.useState(false);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button disabled={isDisabled} variant="outlined" onClick={handleClickOpen}>
        Add Family
      </Button>
      <FormDialog
        open={open}
        handleClose={handleClose}
      />
    </div>
  );
}
