import * as React from "react";
import Button from "@mui/material/Button";
import TreeVizualizer from "./TreeVizualizer";

export default function PrintFamilyTree() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div style={{padding: "10px"}}>
      <Button fullWidth variant="outlined" onClick={handleClickOpen}>
        Print Family Tree
      </Button>
      <TreeVizualizer open={open} handleClose={handleClose} />
    </div>
  );
}
