//using this slice for createEvent as well
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  reportID: -1,
  reportName: "",
  results: [],
  selectedFundCode: null,
  intialValue: "",
  isView:false,
  isEventEdit:false,
  isEventSchedule:""
};
const createReportSlice = createSlice({
  name: "createReport",
  initialState,
  reducers: {
    editReportData(state, action) {
      state.data = action.payload;
    },
    setReportID(state, action) {
      state.reportID = action.payload;
    },
    setReportName(state, action) {
      state.reportName = action.payload;
    },
    filteredResultsData(state, action) {
      state.results = action.payload;
    },
    setSelectedFundCode(state, action) {
      state.selectedFundCode = action.payload;
    },


    //for events
    setIntialValue(state, action) {
      state.intialValue = action.payload;
    },
    setIsView(state, action) {
      state.isView = action.payload;
    },
    setIsEventEdit(state,action){
      state.isEventEdit = action.payload
    },
    setEventSchedule(state,action){
      state.isEventSchedule = action.payload
    }
  },
});

export const createReportAction = createReportSlice.actions;
export default createReportSlice.reducer;
