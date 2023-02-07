import * as React from "react";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { Container, Segment } from "semantic-ui-react";

import { getCurrentFamilyTree } from "helpers/selectorGetters";

import "components/buttons/Buttons.css"

export default function ExportJSON() {
  const familyTreeData = useSelector(getCurrentFamilyTree);

  const downloadJsonIntoTextFile = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(familyTreeData)], {
      type: "text/plain;charset=utf-8",
    });
    element.href = URL.createObjectURL(file);
    element.download = "ExportedJSON.txt";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Container>
      <Segment>
        <div className="bottomLeftButtons">
          <Button fullWidth variant="outlined" onClick={downloadJsonIntoTextFile}>
            Export JSON
          </Button>
        </div>
      </Segment>
    </Container>
  );
}
