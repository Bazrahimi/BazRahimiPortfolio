// main.jsx or index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import App from './App.jsx';
import Home from './pages/Home.jsx';
import NoMatch from './pages/NoMatch.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import ContactResponse from './pages/ContactRespond.jsx';
import AboutMe from './pages/AboutMe.jsx';
import theme from './components/theme.jsx';

// Define routes with child routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {path: 'projects', element: <Projects />},
      {path: 'contact', element: < Contact />},
      {path: '/contact-response', element: <ContactResponse />},
      {path: '/about', element: <AboutMe />},

      { path: '*', element: <NoMatch /> }
    ],
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}>
      </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>,
);
