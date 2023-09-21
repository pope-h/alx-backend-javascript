const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').slice(1);
      const students = lines.map((line) => {
        const [firstname, lastname, age, field] = line.split(',');
        return {
          firstname,
          lastname,
          age: parseInt(age, 10),
          field,
        };
      });

      if (students.length === 0) {
        reject(new Error('No valid students found in the database'));
        return;
      }

      const fieldCounts = {};
      students.forEach((student) => {
        if (!fieldCounts[student.field]) {
          fieldCounts[student.field] = [];
        }
        fieldCounts[student.field].push(student.firstname);
      });

      const result = [];
      result.push(`Number of students: ${students.length}`);

      for (const field in fieldCounts) {
        if (Object.prototype.hasOwnProperty.call(fieldCounts, field)) {
          result.push(`Number of students in ${field}: ${fieldCounts[field].length}. List: ${fieldCounts[field].join(', ')}`);
        }
      }

      resolve(result.join('\n'));
    });
  });
}

module.exports = countStudents;

countStudents('database.csv')
  .then((result) => console.log(result))
  .catch((error) => console.error(error.message));
