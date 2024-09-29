import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostPage from './components/PostPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        {/* Define Routes */}
        <Routes>
          {/* Main Post Page */}
          <Route path="/" element={<PostPage />} />
          {/* Add more routes as needed for other pages/components */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
