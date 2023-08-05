export interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentA: Student = {
  firstName: "Iniko",
  lastName: "Edward",
  age: 32,
  location: "Abuja, Nigeria",
};
const studentB: Student = {
  firstName: "Mititi",
  lastName: "Isaac",
  age: 26,
  location: "Nairobi, Kenya",
};

const studentsList: Array<Student> = [
  studentA,
  studentB,
];

/**
 * Displays information about students in a table.
 * @param students The list of students to display.
 */
export const displayStudents = (students: Array<Student>): void => {
  const table = document.createElement('table');
  const tableHead = document.createElement('thead');
  const tableBody = document.createElement('tbody');

  // Populate the Table Head
  const headRow = document.createElement('tr');
  headRow.insertAdjacentHTML('beforeend', '<td>FirstName</td>');
  headRow.insertAdjacentHTML('beforeend', '<td>Location</td>');
  tableHead.insertAdjacentElement('beforeend', headRow);

  // Populate the Table Body
  for (const student of students) {
    const bodyRow = document.createElement('tr');
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.firstName}</td>`);
    bodyRow.insertAdjacentHTML('beforeend', `<td>${student.location}</td>`);
    tableBody.insertAdjacentElement('beforeend', bodyRow);
  }

  //Populate Table and HTML Body
  table.insertAdjacentElement('beforeend', tableHead);
  table.insertAdjacentElement('beforeend', tableBody);
  document.body.insertAdjacentElement('beforeend', table);
};

// Call the displayStudents function with the studentsList data
displayStudents(studentsList);
