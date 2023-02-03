import { cloneDeep } from "lodash";
const defaultObj = {};

export let selectedIndividual = defaultObj;

export const updateData = ({
  selectedIndividualUid,
  data,
  newFamilyMember = "",
}) => {
  const recursivelyManipulate = ({ arrayOfSiblings }) => {
    for (const currentIndividual of arrayOfSiblings) {
      const { uid: currentIndividualUid, levelVisibility } = currentIndividual;
      if (currentIndividualUid === selectedIndividualUid) {
        const isVisible = levelVisibility;
        if (newFamilyMember) {
          currentIndividual.personalInformation.children.push(newFamilyMember);
          selectedIndividual = cloneDeep(newFamilyMember);
          currentIndividual.levelVisibility = true;
        } else {
          selectedIndividual = cloneDeep(currentIndividual);
          currentIndividual.levelVisibility = !isVisible;
        }
      }
      recursivelyManipulate({
        arrayOfSiblings: currentIndividual.personalInformation.children,
      });
    }
  };
  recursivelyManipulate({ arrayOfSiblings: data });
  return { updatedData: data, selectedIndividual };
};
