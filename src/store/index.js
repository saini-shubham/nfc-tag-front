import { configureStore } from "@reduxjs/toolkit";

//import createReportReducer from './createReportSlice'
import tagReducer from './tagSlice'

const store = configureStore({
  reducer: { 
 
    //createReportDetails: createReportReducer,
    tagDetails:tagReducer,
   
     },
});

export default store;
