import { createSlice, current } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import { defaultData } from "../../defaultData/defaultData";
import { updateData } from "../../helpers/recursiveHelpers";
const _ = require("lodash");

const dataSlice = createSlice({
  name: "data",
  initialState: defaultData,
  reducers: {
    toggleVisibility(state, action) {
      const clone = cloneDeep(current(state));
      const selectedIndividualUid = action.payload;
      const { updatedData } = updateData({
        selectedIndividualUid,
        data: clone,
      });
      return updatedData;
    },
    addNewFamilyMember(state, action) {
      const clone = cloneDeep(current(state));
      const { selectedIndividualUid, newFamilyMember } = action.payload;
      const { updatedData } = updateData({
        selectedIndividualUid,
        data: clone,
        newFamilyMember,
      });
      return updatedData;
    },
    toggleImportJson(state, action) {
      return action.payload;
    },
  },
});

export const { toggleVisibility, addNewFamilyMember, toggleImportJson } =
  dataSlice.actions;
export { dataSlice };
