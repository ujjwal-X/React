import { useRef, useState } from "react";
import APIService,{ ApiUrls } from "../API Service/APIService";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authReducer } from "../Redux/Slice";
export default function Login() {
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const email = useRef();
  const password = useRef();

  const registr = async (event) => {
    event.preventDefault();

    const ob = {
      email: email.current.value,
      password: password.current.value,
    };

    try {
      setLoading(true);
      const response = await APIService.PostApiCall(ApiUrls.LOGIN, ob);

      if (response.data.status) {
        setStatus(true);
        setMsg(response.data.msg);
        dispatch(
          authReducer({
            id: response.data.data.user.id,

            token: response.data.data.token,
            name: response.data.data.user.name,
            type: response.data.data.userType,
            isLogin: true,
          })
        );
        console.log(response);
        navigate("/");
      } else {
        setStatus(false);
        setMsg(response.data.msg);
      }
    } catch (error) {
      setStatus(false);
      setMsg("Something Went Wrong");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4"></div>
          <div className="row">
            <div className="col-12">
              <h2 className="contact-title">Login Here ..!</h2>
            </div>
            <div className="col-lg-8">
              <form onSubmit={registr} className="form-contact contact_form">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Email</label>
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

                  <div className="col-sm-6">
                    <div className="form-group">
                      <label>Password</label>
                      <input
                        className="form-control"
                        ref={password}
                        name="password"
                        id="password"
                        type="password"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter your password'"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group mt-3">
                  <button
                    type="submit"
                    className="button button-contactForm boxed-btn"
                  >
                    {loading ? "Logging..." : "Login"}
                  </button>
                </div>
                <h3 className={status ? " alert alert-success" : "text-danger"}>
                  {msg}
                </h3>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
