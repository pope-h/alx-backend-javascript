/**
 * Updates the grades of a list of students in a given city.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @param {*} city - The city of students.
 * @param {{
 *   studentId: Number,
 *   grade: Number,
 * }[]} newGrades - The new grades to be given to a student.
 * @returns {{id: Number, firstName: String, location: String}[]}
 */

export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsInCity = studentList.filter((student) => student.location === city);

  const updatedStudents = studentsInCity.map((student) => {
    const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
    const grade = gradeObject ? gradeObject.grade : 'N/A';
    return { ...student, grade };
  });

  return updatedStudents;
}
