import { cloneDeep } from "lodash";

export let clickedIndividual;

export const updateData = ({ uniqueId, data }) => {
  const recursivelyManipulate = ({ arrayOfSiblings }) => {
    for (const individual of arrayOfSiblings) {
      console.log(individual);
      if (individual.uid === uniqueId) {
        const isVisible = individual.levelVisibility;
        individual.levelVisibility = !isVisible;
        individual.clicked = true;
        clickedIndividual = cloneDeep(individual);
      } else {
        individual.clicked = false;
      }
      if (individual.children.length > 0) {
        recursivelyManipulate({ arrayOfSiblings: individual.children });
      }
    }
  };
  recursivelyManipulate({ arrayOfSiblings: data });
  return { updatedData: data, clickedIndividual };
};
