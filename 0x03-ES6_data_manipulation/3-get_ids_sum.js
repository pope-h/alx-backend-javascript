/**
 * Retrieves the sum of ids of a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns {Number}
 */

export default function getStudentIdsSum(studentList) {
  return studentList.reduce((accumulator, student) => accumulator + student.id, 0);
}
