// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx';
import Home from './pages/Home';
import NoMatch from './pages/NoMatch';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';

// Define routes with child routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {path: 'projects', element: <Projects />},
      {path: 'contact', element: < Contact />},
      // Uncomment and add your additional routes here
      // { path: 'about', element: <About /> },
      // { path: 'contact', element: <Contact /> },
      { path: '*', element: <NoMatch /> }
    ],
  },
  // You can add more routes here if necessary
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}>
        {/* The App component is now receiving the Router context */}
        {/* No need to wrap <App /> with <RouterProvider> here */}
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
