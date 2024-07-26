import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
// import { listPatientReducer,deletePatientReducer,updatePatientReducer } from "../Redux/PatientSlice"
import ApiServices,{ ApiUrls } from "../API Service/APIService"
import { listPatientReducer,deletePatientReducer,updatePatientReducer } from "../Redux/patientSlice"


export default function AllAppointments() {
    const user = useSelector(state => state.authInfo.value)
    const patient = useSelector(state => state.patientInfo.value)
    const filteredPatient = patient.filter(o =>o.doctor_name == user.id)
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const patientList = async () => {
        try {
            setLoading(true)
            const resp = await ApiServices.GetApiwithCall(ApiUrls.APPOINTMENT , user.token)
            console.log(resp)
            if (resp.data.status) {
                setMsg(resp.data.data.msg)
                dispatch(listPatientReducer(resp.data.data))
            }
        } catch (error) {
            setMsg("Network Error")
        } finally {
            setLoading(false)
        }
    }
    const pending =async (id) =>{
      try{
        setLoading(true)
        const URL = ApiUrls.PENDING + id
        const response = await ApiServices.UpApiCall(URL , null,user.token)
        console.log("response",response)
        if (response.data.status) {
          setStatus(true)
          setMsg(response.data.msg)
      }else {
        setStatus(false);
        setMsg(response.data.msg);
      }
    } catch (error) {
      setStatus(false);
      console.log("Something went wrong");
    } finally {
      setLoading(false);
    }
    }
    const complete =async (id) =>{
      try{
        setLoading(true)
        const URL = ApiUrls. COMPLETE + id
        const response = await ApiServices.UpApiCall(URL , null,user.token)
        console.log("response",response)
        if (response.data.status) {
          setStatus(true)
          setMsg(response.data.msg)
      }else {
        setStatus(false);
        setMsg(response.data.msg);
      }
    } catch (error) {
      setStatus(false);
      console.log("Something went wrong");
    } finally {
      setLoading(false);
    }
    }
    const dele = async (id) => {
        const confrm = window.confirm("Are You Sure to Delete ?")
        if (confrm) {
            try {
                const URL = ApiUrls.PATIENT_DELETE + id
                const resp = await ApiServices.DelApiCall(URL,  user.token)
                console.log(resp)
                if (resp.data.status) {
                    setMsg(resp.data.msg)
                    const nlist = patient.filter(ob => ob.id !== resp.data.data.id)
                    dispatch(deletePatientReducer(nlist))
                }
                else {
                    setMsg(resp.data.msg)
                }
            } catch (error) {
                setMsg("Netowrk Error")
            }
        } else {
            setMsg("Data not Deleted")
        }
    }

    useEffect(() => {
        patientList()
    }, [])

   

    return <>
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Appointment Details...</h2>
                    </div>
                </div>
                <div className="row">
                    <b>{msg}</b>
                    <div className="col-lg-12 col-md-12">
                        {loading ?
                            <div class="spinner-border" role="status">
                            </div> : <table className=" table table-responsive table-hover table-striped table-responsive-lg" style={{ "fontSize": "20px" }} >
                                <thead>
                                    <th>S.no</th>
                                    <th>Recep.Address</th>
                                    <th>Recep.NO</th>
                                    <th>Patient</th>
                                    <th>Phone</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Diagnosis</th>
                                    <th>Appo.Date</th>
                                    <th>Time</th>
                                    <th>Medication</th>
                                </thead>
                                <tbody>
                                    {filteredPatient?.map((ob, index) => <tr>
                                        <td>{index + 1}</td>
                                        <td>{ob.address.name},&nbsp;{ob.address?.raddress}</td>
                                        <td>{ob.address?.phoneNumber}</td>
                                        <td>{ob.name}</td>
                                        <td>{ob.phoneNumber}</td>
                                        <td>{ob.age}</td>
                                        <td>{ob.sex
                                        }</td>
                                        <td>{ob.daignosis
                                        }</td>
                                        <td>{ob.appointmentdate
                                        }</td>
                                        <td>{ob.time
                                        }</td>
                                        <td>{ob.activeStatus ? <button className="btn btn-danger btn-sm"
                                        style={{"backgroundColor":"red","width":"130px"}} onClick={()=>pending(ob.id)}>
                                          pending
                                        </button> : <button
                                        className="btn btn-success btn-sm"
                                        style={{"backgroundColor":"green","width":"130px"}} onClick={()=>complete(ob.id)}>complete </button>
                                      }</td>
                                       
                                    </tr>)}
                                </tbody>
                            </table>
                        }

                    </div>

                </div>
            </div>
        </section >
    </>
}