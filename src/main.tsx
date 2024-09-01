import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from './App'
import Project from './pages/Project';
import './styles/global.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App />
    ),
  },
  {
    path: "wagerly",
    element: (
      <Project index={0} />
    ),
  },
  {
    path: "muunifi",
    element: (
      <Project index={1} />
    ),
  },
  {
    path: "fretify",
    element: (
      <Project index={2} />
    ),
  },
  {
    path: "jd-react-select",
    element: (
      <Project index={3} />
    ),
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
