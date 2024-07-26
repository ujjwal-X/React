import { useRef, useState } from "react";
import APIService,{ ApiUrls } from "../API Service/APIService";
import { useSelector } from "react-redux";

export default function Update() {
  const user = useSelector((state) => state.authInfo.value);
  const defaultclinicdata = useSelector((state) => state.clincInfo.upData);
  console.log(defaultclinicdata);
  const [loading, setLoading] = useState(false);
  const [msg, setmsg] = useState("");
  const [status, setstatus] = useState(false);

  const nm = useRef();
  const phon = useRef();
  const newpassword = useRef();
  const oldpassword = useRef();

  const registr = async (event) => {
    event.preventDefault();
    if (
      !nm.current.value ||
      !phon.current.value ||
      !newpassword.current.value ||
      !oldpassword.current.value
    ) {
      setstatus(false);
      setmsg("Please fill out all the fields correctly");
      return;
    }

    const ob = {
      name: nm.current.value,
      phoneNumber: phon.current.value,
      oldPassword: oldpassword.current.value,
      password: newpassword.current.value,
    };

    try {
      setLoading(true);
      const URL = ApiUrls.UPDATE_CLINICS + defaultclinicdata.id;
      const response = await APIService.UpApiCall(URL, ob, user.token);

      if (response.data.status) {
        setstatus(true);
        setmsg(response.data.msg);
      } else {
        setstatus(false);
        setmsg(response.data.msg);
      }
    } catch (error) {
      setstatus(false);
      console.log("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4">
            <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&amp;callback=initMap"></script>
          </div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Update Details...</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={registr}
                id="contactForm"
                noValidate="novalidate"
              >
                <div className="row">
                  <div className="col-12"></div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name">Name</label>
                      <input
                        className="form-control valid"
                        ref={nm}
                        defaultValue={defaultclinicdata.name}
                        name="name"
                        id="name"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your name'"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="phon">Phon Number</label>
                      <input
                        className="form-control"
                        ref={phon}
                        defaultValue={defaultclinicdata.phoneNumber}
                        name="number"
                        id="phon"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter phon number'"
                        placeholder="Enter phon number"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="phon">Old Password</label>
                      <input
                        className="form-control"
                        ref={oldpassword}
                        defaultValue={defaultclinicdata.oldPassword}
                        name="password"
                        id="old password"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Old Password'"
                        placeholder="Enter Old Password"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="phon"> New Password</label>
                      <input
                        className="form-control"
                        ref={newpassword}
                        defaultValue={defaultclinicdata.password}
                        name="password"
                        id="newpassword"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter New Password'"
                        placeholder="Enter New Password"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    {loading ? "Updating" : "Updated"}
                  </button>
                </div>
                <h1>{msg}</h1>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
