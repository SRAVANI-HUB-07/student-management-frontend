function SearchStudent({ searchName, setSearchName, searchStudentsByName, fetchStudents }) {

    return(
            <div className="form-row">
                <input
                    type="text"
                    placeholder="Search by name"
                    value={searchName}
                    onChange={(event) => setSearchName(event.target.value)}
                />

                <button onClick={searchStudentsByName}>
                    Search
                </button>

                <button onClick={fetchStudents}>
                    Show All
                </button>

                </div>
    );
}
export default SearchStudent;