const fs = require('fs');

function readDatabase(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(Error(err));
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
      }

      const fieldStore = {};
      students.forEach((student) => {
        if (!fieldStore[student.field]) {
          fieldStore[student.field] = [];
        }
        fieldStore[student.field].push(student.firstname);
      });

      const result = {};
      for (const field in fieldStore) {
        if (Object.prototype.hasOwnProperty.call(fieldStore, field)) {
          result[field] = fieldStore[field];
        }
      }

      resolve(result);
    });
  });
}

module.exports = readDatabase;
