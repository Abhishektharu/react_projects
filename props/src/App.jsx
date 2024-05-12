import React from 'react';
import Person from '../components/Person'; // Import the Person component from Person.jsx

const App = () => {
  return (
    <div>
      <h1>People List</h1>
      {/* Render the Person component with props */}
      <Person name="John" age={30} />
    </div>
  );
};

export default App;
