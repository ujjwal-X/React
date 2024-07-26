import axios from "axios";

class APIService {
  // For Registring Doctor & New Clinic data in the API

  PostApiCall(url, data) {
    return axios.post(url, data);
  }
  // For Logging data in the API

  PostApiwithCall(url, data, token) {
    return axios.post(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  DelApiCall(url, token) {
    return axios.delete(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  // To see clinic list
  GetApiwithCall(url, token) {
    return axios.get(url, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  // For deleting data in the API
  DeleteApiwithCall(url, data, token) {
    return axios.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
  // For Updating data in the API

  UpApiCall(url, data, token) {
    return axios.put(url, data, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }
}
// For Apintment data in the API

// addAppointment(url, data, token) {
//   return axios.post(url, data, {
//     headers: {
//       Authorization: "Bearer " + token,
//     },
//   });
// }

const SERVER = "http://tutorials.codebetter.in:3000";
export const ApiUrls = {
  DOCTOR_SAVE: `${SERVER}/auth/doctor/save`,
  LOGIN: `${SERVER}/auth/login`,
  NEW_CLINIC: `${SERVER}/api/reception/save`,
  GET_APOINTMENT: `${SERVER}/api/patient/addpatient`,
  GET_CLINICS: `${SERVER}/api/reception/lists`,
  DELETE_CLINICS: `${SERVER}/api/reception/delete/`,
  UPDATE_CLINICS: `${SERVER}/api/reception/updateReception/ `,
  PATIENT_SAVE: `${SERVER}/api/patient/addpatient`,
  PATIENT_LIST: `${SERVER}/api/patient/lists`,
  PATIENT_UPDATE: `${SERVER}/api/patient/update/`,
  PATIENT_DELETE: `${SERVER}/api/patient/delete/`,
  APPOINTMENT: `${SERVER}/api/patient/list/`,
  COMPLETE: `${SERVER}/api/patient/undo/`,
  PENDING: `${SERVER}/api/patient/done/`,
};
export default new APIService();
