import React, { useState } from "react";
import EmployeeService from "../services/EmployeeService";
import { useNavigate } from "react-router-dom";
import alt from "../assets/male.png";

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  const deleteEmployee = (id) => {
    EmployeeService.deleteEmployee(id).then((res) => {
      setEmployees(employees.filter((employee) => employee.id !== id));
    });
  };

  const editEmployee = (data) => {
    navigate("/edit-employee/" + data.id, {
      state: {
        id: data.id,
        firstName: data.first_name,
        lastName: data.last_name,
        email: data.email,
        phone: data.no_val,
        gender: data.gender,
      },
    });
  };

  React.useEffect(() => {
    EmployeeService.getEmployees().then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const addEmployee = () => {
    navigate("/add-employee");
  };

  return (
    <div>
      <div className="row">
        <div className="col-md-4 mt-3">
          <h3 className="text-left">Employees</h3>
        </div>
        <div className="col-md-4 offset-md-4 mt-3 text-end">
          <button
            className="btn btn-success btn-oval float-right"
            onClick={addEmployee}
          >
            {" "}
            Add Employee
          </button>
        </div>
      </div>
      <div className="row"></div>
      <br />
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th> Image</th>
              <th> First Name</th>
              <th> Last Name</th>
              <th> Email</th>
              <th> Phone</th>
              <th> Gender</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id}>
                <td>
                  {employee.photo != null ? (
                    <img
                      className="img-custom text-center"
                      src={employee.photo}
                      alt=""
                    />
                  ) : (
                    <img className="img-custom text-center" src={alt} alt="" />
                  )}
                </td>
                <td> {employee.first_name} </td>
                <td> {employee.last_name}</td>
                <td> {employee.email}</td>
                <td> {employee.no_val}</td>
                <td>
                  {employee.gender === "M" ? (
                    <span>Male</span>
                  ) : (
                    <span>Female</span>
                  )}
                </td>
                <td className="text-center">
                  <button
                    onClick={() => editEmployee(employee)}
                    className="btn btn-outline-dark"
                  >
                    Update{" "}
                  </button>
                  <button
                    style={{ marginLeft: "10px" }}
                    onClick={() => deleteEmployee(employee.id)}
                    className="btn btn-outline-danger btn-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListEmployeeComponent;
