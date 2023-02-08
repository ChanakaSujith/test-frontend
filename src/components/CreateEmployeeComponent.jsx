import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
const CreateEmployeeComponent = (props) => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("M");

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {
      first_name: firstName,
      last_name: lastName,
      email: email,
      no_val: phone,
      gender: gender,
    };
    console.log("employee => " + JSON.stringify(employee));

    EmployeeService.createEmployee(employee).then((res) => {
      navigate("/employees");
    });
  };

  const cancel = () => {
    navigate("/employees");
  };

  const getTitle = () => {
    return <h3 className="text-center mt-3">Add Employee</h3>;
  };

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {getTitle()}
            <div className="card-body">
              <form>
                <div className="form-group mt-2">
                  <label> First Name: </label>
                  <input
                    placeholder="First Name"
                    name="firstName"
                    className="form-control"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label> Last Name: </label>
                  <input
                    placeholder="Last Name"
                    name="lastName"
                    className="form-control"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label> Email: </label>
                  <input
                    placeholder="Email Address"
                    name="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label> Phone: </label>
                  <input
                    placeholder="Phone"
                    name="phone"
                    className="form-control"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="form-group mt-2">
                  <label> Gender: </label>

                  <select
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                  </select>
                </div>
                <div className="mt-2 text-end">
                  <button className="btn btn-danger" onClick={cancel}>
                    Cancel
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={saveOrUpdateEmployee}
                    style={{ marginLeft: "10px" }}
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployeeComponent;
