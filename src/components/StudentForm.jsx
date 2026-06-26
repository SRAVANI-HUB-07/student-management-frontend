function StudentForm({ name, setName, setMessage, addStudent, updateStudent }) {
    return(
        <div className="form-row">
      <input
        type="text"
        placeholder="Enter student name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
          setMessage("");
        }}
      />

     <button onClick={addStudent}>Add Student</button>
     <button onClick={updateStudent}>
        Update Student
      </button>
    </div>

    );
}
export default StudentForm;