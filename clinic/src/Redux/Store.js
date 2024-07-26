import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";
import PatientSlice from "./patientSlice";
import ClinicSlice from "./Clinicslice";

const store = configureStore({
  reducer: {
    authInfo: Slice,
    clinicInfo: ClinicSlice,
    patientInfo: PatientSlice,
  },
});
export default store;
