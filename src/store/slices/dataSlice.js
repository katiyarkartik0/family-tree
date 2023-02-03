import { createSlice, current } from "@reduxjs/toolkit";
import { cloneDeep } from "lodash";
import { updateData } from "../../helpers/recursiveHelpers";
const _ = require("lodash");

const dataSlice = createSlice({
  name: "data",
  initialState: [
    {
      uid: "0",
      name: "great grandfather",
      levelVisibility: true,
      children: [
        {
          uid: "0.1",
          name: "son1",
          levelVisibility: true,
          children: [
            {
              uid: "0.1.1",
              name: "son1",
              levelVisibility: false,
              children: [],
            },
            {
              uid: "0.1.2",
              name: "son2",
              levelVisibility: false,
              children: [],
            },
          ],
        },
        { uid: "0.2", name: "daughter1", levelVisibility: false, children: [] },
      ],
    },
  ],
  reducers: {
    toggleVisibility(state, action) {
      const clone = cloneDeep(current(state));
      const uniqueId = action.payload;
      const { updatedData } = updateData({ uniqueId, data: clone });
      return updatedData;
    },
  },
});

export const { toggleVisibility } = dataSlice.actions;
export { dataSlice };
