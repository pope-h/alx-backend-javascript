export default function createIteratorObject(report) {
//  const employeesList = report.allEmployees;
  const departments = Object.keys(report.allEmployees);

  return {
    * [Symbol.iterator]() {
      for (const department of departments) {
        const employees = report.allEmployees[department];
        for (const employee of employees) {
          yield employee;
        }
      }
    },
  };
}
