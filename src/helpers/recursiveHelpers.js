export const recursivelyManipulate = (uniqueId, arrayOfSiblings) => {
  for (const individual of arrayOfSiblings) {
    console.log(individual);
    if (individual.uid === uniqueId) {
      const isVisible = individual.levelVisibility;
      individual.levelVisibility = !isVisible;
      return;
    } else {
      if (individual.children.length > 0) {
        return recursivelyManipulate(uniqueId, individual.children);
      }
    }
  }
};
