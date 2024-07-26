import { useEffect, useState, } from "react"
import { useNavigate } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
// import { listPatientReducer,deletePatientReducer,updatePatientReducer } from "../Redux/PatientSlice"
import ApiServices,{ ApiUrls } from "../API Service/APIService"
import { listPatientReducer,deletePatientReducer,updatePatientReducer } from "../Redux/patientSlice"


export default function AllAppointments() {
    const user = useSelector(state => state.authInfo.value)
    const patient = useSelector(state => state.patientInfo.value)
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const patientList = async () => {
        try {
            setLoading(true)
            const resp = await ApiServices.GetApiwithCall(ApiUrls.PATIENT_LIST, user.token)
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

    const Pupdate = (ob) => {
        dispatch(updatePatientReducer(ob))
        navigate('/Updateapp')
    }

    return <>
        <section className="contact-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">Clinic Details</h2>
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
                                    <th>Patient Name</th>
                                    <th>Phone</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Diagnosis</th>
                                    <th>Appointment Date</th>
                                    <th>Time</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </thead>
                                <tbody>
                                    {patient?.map((ob, index) => <tr>
                                        <td>{index + 1}</td>

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
                                        <td>{ob.activeStatus ? "Active" : "DeACtive"}</td>
                                        <td><button className="btn btn-success btn-sm" onClick={() => Pupdate(ob)}>Update</button>
                                            &nbsp; <button className="btn btn-danger btn-sm" onClick={() => dele(ob.id)}>Delete</button></td>
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