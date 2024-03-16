import React, { useState } from "react";

const cssStyle = {
  color: "green",
};

const StudentsTable = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "Student 1", age: 18, grade: "A" },
    { id: 2, name: "Student 2", age: 19, grade: "B" },
    { id: 3, name: "Student 3", age: 20, grade: "C" },
    { id: 4, name: "Student 4", age: 21, grade: "D" },
    { id: 5, name: "Student 5", age: 22, grade: "E" },
    { id: 6, name: "Student 6", age: 23, grade: "F" },
    { id: 7, name: "Student 7", age: 24, grade: "G" },
    { id: 8, name: "Student 8", age: 25, grade: "H" },
    { id: 9, name: "Student 9", age: 26, grade: "I" },
    { id: 10, name: "Student 10", age: 27, grade: "J" },
  ]);

  return (
    <table>
      <thead>
        <tr
          style={{
            color: "lightblue",
            backgroundColor: "#3c3f41",
            textAlign: "revert-layer",
            fontFamily: "cursive",
          }}
        >
          <th style={cssStyle}>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.id}</td>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.grade}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentsTable;
