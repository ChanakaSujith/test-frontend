import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:3333/employees";

class EmployeeService {
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL);
  }

  createEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/create", employee);
  }

  getEmployeeById(employeeId) {
    return axios.get(EMPLOYEE_API_BASE_URL + "/" + employeeId);
  }

  updateEmployee(employee, employeeId) {
    return axios.patch(EMPLOYEE_API_BASE_URL + "/edit/" + employeeId, employee);
  }

  deleteEmployee(employeeId) {
    return axios.post(EMPLOYEE_API_BASE_URL + "/delete/" + employeeId);
  }
}

export default new EmployeeService();
