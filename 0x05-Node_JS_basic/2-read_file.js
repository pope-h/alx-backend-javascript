const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.trim().split('\n').slice(1);
    const students = lines.map((line) => {
      const [firstname, lastname, age, field] = line.split(',');
      return {
        firstname, lastname, age: parseInt(age, 10), field,
      };
    });

    if (students.length === 0) {
      throw new Error('No valid students found in the database');
    }

    const fieldCounts = {};
    students.forEach((student) => {
      if (!fieldCounts[student.field]) {
        fieldCounts[student.field] = [];
      }
      fieldCounts[student.field].push(student.firstname);
    });

    console.log(`Number of students: ${students.length}`);

    for (const field in fieldCounts) {
      if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
        console.log(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
