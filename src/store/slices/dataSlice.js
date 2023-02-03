import { createSlice, current } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import { data } from "../../FamilyData/data";
import { updateData } from "../../helpers/recursiveHelpers";
const _ = require("lodash");

const dataSlice = createSlice({
  name: "data",
  initialState: data,
  reducers: {
    toggleVisibility(state, action) {
      const clone = cloneDeep(current(state));
      const selectedIndividualUid = action.payload;
      const { updatedData } = updateData({ selectedIndividualUid, data: clone });
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
  },
});

export const { toggleVisibility, addNewFamilyMember } = dataSlice.actions;
export { dataSlice };
