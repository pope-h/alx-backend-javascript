/**
 * Retrieves ids from a list of students.
 * @param {{
 *   id: Number,
 *   firstName: String,
 *   location: String
 * }[]} students - The list of students.
 * @returns
 */

export default function getListStudentIds(studentList) {
  if (!Array.isArray(studentList)) {
    return [];
  }

  const studentId = studentList.map((student) => student.id);
  return studentId;
}
