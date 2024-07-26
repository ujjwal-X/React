import { useRef, useState } from "react"
import APIService,{ ApiUrls } from "../API Service/APIService";

import { useSelector } from "react-redux"

export default function NewAppointment() {

    const user = useSelector(state => state.authInfo.value)
    const [msg, setMsg] = useState("")
    const [loading, setLoading] = useState(false)
    const [status, setStatus] = useState(false)

    const nameBox = useRef()
    const genBox = useRef()
    const phoneBox = useRef()
    const ageBox = useRef()
    const timeBox = useRef()
    const dateBox = useRef()
    const diagnoBox = useRef()
    const patientsave = async (event) => {
        event.preventDefault()
        const ob = {
            name: nameBox.current.value,
            phoneNumber: phoneBox.current.value,
            sex: genBox.current.value,
            age: ageBox.current.value,
            appointmentdate: dateBox.current.value,
            time: timeBox.current.value,
            daignosis: diagnoBox.current.value
        }
        console.log(ob)
        try {
            setLoading(true)
            const response = await APIService.PostApiwithCall(ApiUrls.PATIENT_SAVE, ob, user.token)
            console.log("response", response)
            if (response.data.status) {
                setStatus(true)
                setMsg(response.data.msg)
                event.target.reset()

            } else {
                setStatus(false)
                setMsg(response.data.msg)
            }

        } catch (error) {
            setStatus(false)
            setMsg("Network Issue")
        } finally {
            setLoading(false)

        }

    }

    return <>
        <section className="contact-section">
            <div className="container">
                <div className="d-none d-sm-block mb-5 pb-4">
                </div>
                <div className="row">
                    <div className="col-12">
                        <h2 className="contact-title">New Appointment</h2>
                    </div>
                    <div className="col-lg-12">
                        <form onFocus={() => setMsg("")} onSubmit={patientsave} className="form-contact contact_form" >
                            <div className="row">

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input className="form-control valid" ref={nameBox} name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Enter your name" />
                                    </div>
                                </div>


                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Phone Number</label>
                                        <input className="form-control" ref={phoneBox} name="phone" id="phone" type="number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter phone number'" placeholder="Enter phone number" />
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Gender</label>
                                        <select className="form-control form-select" ref={genBox} name="gender" id="gender"  >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Age</label>
                                        <input className="form-control" ref={ageBox} name="age" id="age" type="number" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter phone number'" placeholder="Enter Your Age" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Appointment Date</label>
                                        <input className="form-control" ref={dateBox} name="date" id="date" type="date" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter phone number'" />
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Appointment Time</label>
                                        <input className="form-control" ref={timeBox} name="time" id="time" type="time" />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="form-group">
                                        <label>Diagnosis For</label>
                                        <input className="form-control valid" ref={diagnoBox} name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Diagnosis For'" placeholder="Diagnosis For" />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <button type="submit" className="button button-contactForm boxed-btn">{loading ? "Saving..." : "Save"}</button>
                            </div>
                            <h3 className={status ? " alert alert-success" : "text-danger"}>{msg}</h3>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    </>
}