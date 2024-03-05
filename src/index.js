import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from './Components/Container/Home';
import Contact from './Components/Container/Contact';
import About from './Components/Container/About';
import Education from "./Components/Container/Education"
import Skills from "./Components/Container/Skills"
import Projects from "./Components/Container/Projects"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App />}>
      <Route path='' element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
       <Route path="/education" element={<Education/>}/>
       <Route path="/projects" element={<Projects/>}/>
       <Route path="/skills" element={<Skills/>}/>
     
       <Route path="/contact" element={<Contact/>}/>
    </Route>
  )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>
);

