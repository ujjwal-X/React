import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  deleteClinicReducer,
  updateClinicReducer,
  listclinicReducer,
} from "../Redux/Clinicslice";
import APIService, { ApiUrls } from "../API Service/APIService";

export default function AllClinics() {
  const user = useSelector((state) => state.authInfo.value);
  const clinics = useSelector((state) => state.clinicInfo.value);
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fetchUserList = async () => {
    try {
      setLoading(true);
      const response = await APIService.GetApiwithCall(
        ApiUrls.GET_CLINICS,
        user.token
      );
      console.log("User List response", response);
      if (response.data.status) {
        setMsg(response.data.data.msg);
        dispatch(listclinicReducer(response.data.data));
      } else {
        setStatus(false);
        setMsg(response.data.msg);
      }
    } catch (error) {
      setStatus(false);
      setMsg("Network Issue");
    } finally {
      setLoading(false);
    }
  };
  const DeleteClinic = async (id) => {
    const confirmation = window.confirm("Are you sure to remove this Clinic?");
    if (confirmation) {
      try {
        const URL = ApiUrls.DELETE_CLINICS + id;
        const response = await APIService.DeleteApiwithCall(
          URL,
          null,
          user.token
        );
        console.log(response);
        if (response.data.status) {
          setMsg(response.data.msg);
          const nlist = clinics.filter(
            (obj) => obj.id !== response.data.data.id
          );
          dispatch(deleteClinicReducer(nlist));
        } else {
          setMsg(response.data.msg);
        }
      } catch (error) {
        setMsg("Some Network Issue");
      }
    } else {
      setMsg("Data can't be deleted");
    }
  };
  const UpdateClinic = (obj) => {
    dispatch(updateClinicReducer(obj));
    navigate("/update");
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Clinic Details</h2>
            </div>
            <div className="col lg-12">
              {loading ? (
                <div className="spinner-border" role="status"></div>
              ) : (
                <table className="table  table-hover ">
                  <thead>
                    <th>S.No</th>
                    <th>Address</th>
                    <th>Receptionist</th>
                    <th>Phone Number</th>
                    <th>Email</th>
                    <th>Action</th>
                  </thead>
                  <tbody>
                    {clinics?.map((obj, index) => (
                      <tr style={{ fontSize: "20px" }}>
                        <td>{index + 1}</td>
                        <td>{obj.raddress}</td>
                        <td>{obj.name}</td>
                        <td>{obj.phoneNumber}</td>
                        <td>{obj.email}</td>
                        {/* <td>{activeStatus ? "Active" : "DeActive"}</td> */}
                        <td>
                          <button
                            className="btn btn-sucess"
                            onClick={() => UpdateClinic(obj)}
                          >
                            Update
                          </button>
                          &nbsp;&nbsp;
                          <button
                            className="btn btn-danger"
                            onClick={() => DeleteClinic(obj.id)}
                            style={{ backgroundColor: "red" }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// import React, { useEffect, useState } from "react";
// import APIService, { ApiUrls } from "../API Service/APIService";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { listclinicReducer } from "../Redux/Clinicslice";

// const Allclinics = () => {
//   const [clinics, setClinics] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const user = useSelector((state) => state.authInfo.value);
//   const navigate = useNavigate();
//   const fetchClinics = async () => {
//     try {
//       setLoading(true);
//       const response = await APIService.GetApiwithCall(
//         ApiUrls.GET_CLINICS,
//         user.token
//       );
//       console.log(JSON.stringify(response));
//       if (response.data.status) {
//         setClinics(response.data.data);
//       }
//     } catch (error) {
//       console.log("Error fetching clinics:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
//   // To Remove Clinic
//   const Removeclinic = async (id, index) => {
//     const confirmation = window.confirm("Are you sure to remove this Clinic?");
//     if (!confirmation) {
//       return;
//     }

//     try {
//       setLoading(true);
//       const response = await APIService.DeleteApiwithCall(
//         ApiUrls.DELETE_CLINICS,
//         id,
//         user.token
//       );

//       if (response.data.status) {
//         const updatedClinics = [...clinics];
//         updatedClinics.splice(index, 1);
//         setClinics(updatedClinics);
//       }
//     } catch (error) {
//       console.log("Error removing clinic:", error);
//     } finally {
//       setLoading(false);
//     }
//     console.log(JSON.stringify(id));
//   };

//   // For Updating clinic
//   const Updateclinic = async (id, index) => {
//     try {
//       setLoading(true);
//       const response = await APIService.UpApiCall(
//         ApiUrls.UPDATE_CLINICS,
//         { id }, // Pass the id as an object
//         user.token
//       );

//       if (response.data.status) {
//         const updatedClinics = [...clinics];

//         updatedClinics[index] = response.data.clinic;

//         setClinics(updatedClinics);
//       } else {
//         console.log("Update failed:", response.data.message);
//       }
//     } catch (error) {
//       console.log("Error updating clinic:", error);
//     } finally {
//       setLoading(false);
//     }
//     navigate("/update");
//     console.log(JSON.stringify(id));
//   };

//   useEffect(() => {
//     fetchClinics();
//   }, []);

//   return (
//     <div className="container mt-5">
//       <h2>Clinic List</h2>
//       {loading ? (
//         <p>Loading clinics...</p>
//       ) : (
//         <table className="table  table-hover ">
//           <thead>
//             <tr>
//               <th>Index</th>
//               <th>Name</th>
//               <th>Email</th>
//               <th>Phone Number</th>
//               <th>Address</th>
//               <th>Operations</th>
//             </tr>
//           </thead>
//           <tbody>
//             {clinics.map((clinic, index) => (
//               <tr key={clinic.id}>
//                 <td>{index + 1}</td>
//                 <td>{clinic.name}</td>
//                 <td>{clinic.email}</td>
//                 <td>{clinic.phoneNumber}</td>
//                 <td>{clinic.raddress}</td>
//                 <td>
//                   <button
//                     onClick={() => Removeclinic(clinic, index)}
//                     className="btn btn-danger color=danger"
//                   >
//                     Remove
//                   </button>{" "}
//                   &nbsp;&nbsp;{" "}
//                   <button
//                     onClick={() => Updateclinic(clinic, index)}
//                     className="btn btn-success color=danger btn-small"
//                   >
//                     Update
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Allclinics;
