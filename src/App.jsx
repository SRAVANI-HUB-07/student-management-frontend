import './App.css'
import { useState, useEffect } from 'react';
import StudentList from './components/StudentList';
import SearchStudent from './components/SearchStudent';
import StudentForm from './components/StudentForm';
import AIRecommendation from './components/AIRecommendation';
import {
  getStudents,
  addStudentApi,
  searchStudentsApi,
  deleteStudentApi,
  updateStudentApi
} from "./services/studentService";

function App() {

  const [name, setName] = useState("");
  const [students, setStudents] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [aiStudentName, setAiStudentName] = useState("");
  const [interest, setInterest] = useState("");
  const [skillLevel, setSkillLevel] = useState("");
  const [weeklyHours, setWeeklyHours] = useState("");
  const [recommendation, setRecommendation] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessage, setAiMessage] = useState("");
  useEffect(() => {

    fetchStudents();

   }, []);

  const fetchStudents = () => {
      setLoading(true);
      setMessage("");
      getStudents()
        .then(response => 
          {
            if(!response.ok)
            {
              throw new Error("Failed to fetch students",error);
            }
            return response.json();
          })
          
        .then(data => {
          setStudents(data);
          setMessage("");
        })
        .catch(error=>{
          console.log(error);
          setStudents([]);
          setMessage("Unable to load students. Please try again.");
        })
        .finally(()=>
          {setLoading(false);
        
        });
      };


  const addStudent = () => {

   if (name.trim() === "") {
    setMessage("Please enter a student name to add.");
    return;
   } 

    addStudentApi(name)
    .then(response=>response.json())
    .then(newStudent=>{fetchStudents();
      setName("");
    });

   };

  const searchStudentsByName = () => {
  if (searchName.trim() === "") {
    setStudents([]);
    setMessage("Please enter a name to search.");
    return;
  }

  setLoading(true);
  setMessage("");

   searchStudentsApi(searchName)
    .then(response => {
      if (response.status === 404) {
        throw new Error("NOT_FOUND");
      }

      if (!response.ok) {
        throw new Error("SEARCH_FAILED");
      }

      return response.json();
    })
    .then(data => {
      setStudents(data);
      setMessage("");
    })
    .catch(error => {
      console.log("Search error:", error);
      setStudents([]);

      if (error.message === "NOT_FOUND") {
        setMessage("No students found.");
      } else {
        setMessage("Unable to search students. Please try again.");
      }
    })
    .finally(() => {
      setLoading(false);
    });
   };

  const deleteStudent = (id) => {
    deleteStudentApi(id)
    .then(() => {
      fetchStudents();
     });
     };

  const editStudent = (student) => {
      setEditingId(student.id);
      setName(student.name);
      };


  const updateStudent = () => {

     if (name.trim() === "") {
        setMessage("Please enter a student name to update.");
        return;
      }

       updateStudentApi(editingId, name)
        .then(response => response.json())
        .then(() => {

          fetchStudents();

          setEditingId(null);
          setName("");

        });
    };



  const generateAIRecommendation = () => {
    if (
      aiStudentName.trim() === "" ||
      interest.trim() === "" ||
      skillLevel.trim() === "" ||
      weeklyHours === ""
    ) {
      setAiMessage("Please fill all AI recommendation fields.");
      return;
    }

    setAiLoading(true);
    setAiMessage("");
    setRecommendation("");

    fetch("http://localhost:8080/ai/recommendation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        studentName: aiStudentName,
        interest: interest,
        skillLevel: skillLevel,
        weeklyHours: Number(weeklyHours)
      })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("AI recommendation failed");
        }

        return response.json();
      })
      .then(data => {
        setRecommendation(data.recommendation);
        setAiStudentName("");
        setInterest("");
        setSkillLevel("");
        setWeeklyHours("");
      })
      .catch(error => {
        console.log(error);
        setAiMessage("Unable to generate AI recommendation. Please try again.");
      })
      .finally(() => {
        setAiLoading(false);
      });
  };  

  return (
    <div className="app-container">
      <h1>Student Management System</h1>

      {loading && <p className="message">Loading...</p>}
      {message && <p className="message">{message}</p>}

      <h2>Total Students: {students.length}</h2>

    <SearchStudent
      searchName={searchName}
      setSearchName={setSearchName}
      searchStudentsByName={searchStudentsByName}
      fetchStudents={fetchStudents}
    />


     <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />


    <StudentForm
        name={name}
        setName={setName}
        setMessage={setMessage}
        addStudent={addStudent}
        updateStudent={updateStudent}
      />
      
      <AIRecommendation
        aiStudentName={aiStudentName}
        setAiStudentName={setAiStudentName}
        interest={interest}
        setInterest={setInterest}
        skillLevel={skillLevel}
        setSkillLevel={setSkillLevel}
        weeklyHours={weeklyHours}
        setWeeklyHours={setWeeklyHours}
        recommendation={recommendation}
        aiLoading={aiLoading}
        aiMessage={aiMessage}
        generateAIRecommendation={generateAIRecommendation}
      />

    </div>
  );
}

export default App
