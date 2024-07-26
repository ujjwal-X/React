import { useRef, useState } from "react";

import { useSelector } from "react-redux";
import APIService,{ ApiUrls } from "../API Service/APIService";

export default function Newclinic() {
  const user = useSelector((state) => state.authInfo.value);
  const [loading, setLoading] = useState(false);
  const [msg, setmsg] = useState("");
  const [status, setstatus] = useState(false);

  const nm = useRef();
  const email = useRef();
  const phon = useRef();
  const password = useRef();
  const adress = useRef();

  const newclinic = async (event) => {
    event.preventDefault();

    if (
      !nm.current.value ||
      !adress.current.value ||
      !phon.current.value ||
      !password.current.value ||
      !email.current.value
    ) {
      setstatus(false);
      setmsg("Please fill out all the fields correctly");
      return;
    }

    const ob = {
      name: nm.current.value,
      email: email.current.value,
      phoneNumber: phon.current.value,
      password: password.current.value,
      raddress: adress.current.value,
    };
    console.log(ob);
    try {
      setLoading(true);
      const response = await APIService.PostApiwithCall(
        ApiUrls.NEW_CLINIC,
        ob,
        user.token
      );

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
              <h2 className="contact-title">Add New Clinic</h2>
            </div>
            <div className="col-lg-8">
              <form
                className="form-contact contact_form"
                onSubmit={newclinic}
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
                        name="number"
                        id="phon"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter phon number'"
                        placeholder="Enter phon number"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input
                        className="form-control valid"
                        ref={email}
                        name="email"
                        id="email"
                        type="email"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Email"
                      />
                    </div>
                  </div>

                  <div className="col-6">
                    <div className="form-group">
                      <label htmlFor="phon"> Password</label>
                      <input
                        className="form-control"
                        ref={password}
                        name="password"
                        id="password"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Password'"
                        placeholder="Enter Password"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="name">Adress</label>
                      <input
                        className="form-control valid"
                        ref={adress}
                        name="adress"
                        id="adress"
                        type="text"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your new Adress'"
                        placeholder="Enter your new Adress"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    {loading ? "Saving" : "Saved"}
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
