import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import your page components
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import NoMatch from './pages/NoMatch'; // A 404 page component

// Import your layout components

// import Navigation from './components/Navigation';


function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

      </Route>

    </Routes>
  
  );
}

export default App;
