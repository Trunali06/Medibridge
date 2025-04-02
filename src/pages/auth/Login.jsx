import { useState, useEffect } from "react";
import "../../css/Login.css";
import Button from "../../shared/components/Button"


const Login = () => {
  const initialValues =
   { 
    username: "",
     number: "",
     password: ""
   };
  const [formValues, setFormValues] = useState(initialValues);
  const [fromErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) =>
  {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(fromErrors).length === 0 && isSubmit) {
      console.log("Form submitted successfully:", formValues);
    }
  }, [fromErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.number) {
      errors.number = "Number is required!";
    }
    if (!values.password) {
      errors.password = "Password is required!";
    }
    return errors;
  };

  return (
    <>


      <div className="first">
        <div className="loginp">
          <div className="patient"></div>
        </div>
        <div className="loginpage">
          <form onSubmit={handleSubmit}>
            <h3 className="login">Login</h3>

            <div>
              <label className="username">Username</label>
              <br />
              <input
                className="name"
                type="text"
                name="username"
                placeholder="Username or Email"
                value={formValues.username}
                onChange={handleChange}
              />
              
              {fromErrors.username && <p className="error" >{fromErrors.username}</p>}
            </div><br />

            <div>
              <label className="username">Mobile Number</label>
              <br />
              <input
                className="name"
                type="number"
                name="number"
                placeholder="Enter your mobile number"
                value={formValues.number}
                onChange={handleChange}
              />
              {fromErrors.number && <p className="error">{fromErrors.number}</p>}
            </div><br />

            <div>
              <label className="username">Password</label>
              <br />
              <input
                className="name"
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formValues.password}
                onChange={handleChange}
              />
              {
              fromErrors.password && 
              <p className="error">{fromErrors.password}</p>
              }
            </div><br />

            <div className="logb">
              <Button btnName={"Login"} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
