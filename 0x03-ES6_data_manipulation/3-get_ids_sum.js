export default function getStudentIdsSum(arr) {
  return students.reduce((sum, {id}) => sum + id, 0);
}
