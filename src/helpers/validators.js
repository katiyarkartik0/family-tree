import { isArray, isObject, isString } from "lodash";

const validObject = (currentIndividual) => {
  if (
    isObject(currentIndividual) &&
    currentIndividual.hasOwnProperty("uid") &&
    currentIndividual.hasOwnProperty("levelVisibility") &&
    currentIndividual.hasOwnProperty("personalInformation") &&
    currentIndividual.personalInformation.hasOwnProperty("children") &&
    isArray(currentIndividual.personalInformation.children)
  ) {
    return true;
  }
  return false;
};

export const isJsonValid = (json) => {
  let isValid = true;
  let parsedStringJson;
  const recursiveJsonValidator = (data) => {
    for (const currentIndividual of data) {
      if (validObject(currentIndividual)) {
        return recursiveJsonValidator(
          currentIndividual.personalInformation.children
        );
      } else {
        isValid = false;
        return;
      }
    }
  };
  try {
    if (isString(json) && json.length() === 0) {
      throw Error();
    }
    parsedStringJson = eval(json);
  } catch (error) {
    isValid = false;
  }

  if (!isValid) {
    return isValid;
  }

  recursiveJsonValidator(parsedStringJson);
  return isValid;
};
