function StudentList({ students, deleteStudent, editStudent }) {

    return(
        <ul className="student-list">
      {students.map(student => (
        <li className="student-item" key={student.id}>
          <span className="student-id">{student.id}</span>
          <span className="student-name">{student.name}</span>
          <button onClick={() => deleteStudent(student.id)}>
            Delete
          </button>
          <button onClick={() => editStudent(student)}>
            Edit
          </button>
        </li>
      ))}
      </ul>
    );
    
}
export default StudentList;