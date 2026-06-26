const BASE_URL = "http://localhost:8080/students";

export const getStudents=()=>{
    return fetch (BASE_URL);
}

export const addStudentApi = (name) => {
  return fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name })
  });
};

export const searchStudentsApi = (searchName) => {
  return fetch(`${BASE_URL}/name/${searchName}`);
};

export const deleteStudentApi = (id) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE"
  });
};

export const updateStudentApi = (id, name) => {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name: name })
  });
};