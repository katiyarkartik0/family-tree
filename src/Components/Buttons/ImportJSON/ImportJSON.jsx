import * as React from "react";
import Button from "@mui/material/Button";

import AddJsonFormDialog from "components/forms/addJSON/AddJsonFormDialog";

import "components/buttons/Buttons.css"

export default function ImportJSON() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="bottomLeftButtons">
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        Import JSON
      </Button>
      <AddJsonFormDialog open={open} handleClose={handleClose} />
    </div>
  );
}
