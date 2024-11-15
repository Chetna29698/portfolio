// index.js
import React from 'react'
import ReactDOM from 'react-dom/client'

import {
    RouterProvider,
    createBrowserRouter
} from 'react-router-dom'

import App from './App'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificate from './components/Certificate'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/skills',
                element: <Skills />,
            },
            {
                path: '/projects',
                element: <Projects />,
            },
            {
              path: '/certificate',
              element: <Certificate />,
          },
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App />
    </RouterProvider>
)
