import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import Lecture from './pages/Lecture';
import Lecture_2 from './pages/Lecture_2';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/lecture" element={<Lecture />} />
        <Route path="/lecture_2" element={<Lecture_2 />} />
      </Routes>
    </Router>
  );
};

export default App; 