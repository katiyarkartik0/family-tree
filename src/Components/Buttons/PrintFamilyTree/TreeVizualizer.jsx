import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import { useSelector } from "react-redux";

import { getCurrentFamilyTree } from "helpers/selectorGetters";
import { selectedIndividual } from "helpers/recursiveHelpers";

const TreeVizualizer = ({ open, handleClose }) => {
  const familyTreeData = useSelector(getCurrentFamilyTree);

  const isIndividualSelected = Object.keys(selectedIndividual).length > 0;

  const renderTree = ({
    treeData,
    selectedIndividual = "",
    currentRootIsAFamilyMember = false,
  }) => {
    return (
      <>
        <ul>
          {treeData.map((member) => {
            if (
              !selectedIndividual ||
              (selectedIndividual && member.uid === selectedIndividual.uid) ||
              currentRootIsAFamilyMember
            ) {
              return (
                <li className={member.uid}>
                  <div>{member.personalInformation.name}</div>
                  {member.personalInformation.children &&
                  member.personalInformation.children.length
                    ? renderTree({
                        treeData: member.personalInformation.children,
                        selectedIndividual,
                        currentRootIsAFamilyMember: true,
                      })
                    : ""}
                </li>
              );
            } else if (
              member.personalInformation.children &&
              member.personalInformation.children.length
            ) {
              return renderTree({
                treeData: member.personalInformation.children,
                selectedIndividual,
              });
            }
          })}
        </ul>
      </>
    );
  };

  return (
    <Dialog fullScreen open={open} onClose={handleClose}>
      <DialogTitle>Family Tree</DialogTitle>
      <DialogContent>
        {isIndividualSelected && (
          <>
            <h1>Family Tree at the selected level</h1>
            <div>
              {renderTree({ treeData: familyTreeData, selectedIndividual })}
            </div>
          </>
        )}

        <br></br>
        <h1>Whole Family Tree</h1>
        <div>{renderTree({ treeData: familyTreeData })}</div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button>Download PDF</Button>
      </DialogActions>
    </Dialog>
  );
};

export default TreeVizualizer;
