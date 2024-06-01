import React from 'react'
import ReactDOM from 'react-dom/client'

// Emotion 
import { Global, css } from '@emotion/react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { PlanProvider } from './PlanProvider';
// Router 
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

// Pages/Components 
import { Root, App } from './App.jsx'
import Landing from './pages/landing.jsx'
import Plan from './pages/plan.jsx'
import Explore from './pages/explore.jsx'
import Social from './pages/social.jsx'
import Journal from './pages/journal.jsx'
import Place from './pages/place.jsx'

const globalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  html {
    font-family: "Montserrat", sans-serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  body{
    margin: 0;
    padding: 0;
    background-color: #DEDBD2;
  }
  
`

// main.jsx


const queryClient = new QueryClient()

const router = createBrowserRouter([
  { path: "/", 
    element: <Root/>,
    children: [
      { index: true, element: <Landing />},
      {
        path: "plan",
        element: <Plan />
      },
      {
        path: "explore",
        element: <Explore />,
        children: [
          {path: ":place", element: <Place/>}
        ]
      },
      {
        path: "journal",
        element: <Journal />
      },
      {
        path: "social",
        element: <Social />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Global styles={globalStyles}/>
    <QueryClientProvider client={queryClient}>
      <PlanProvider>
        <RouterProvider router={router}/>
      </PlanProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
