import React from 'react'
import { useRoutes } from 'react-router-dom'
import About from './components/about';
import SingIn from './components/login/SingIn';
import Home from './Home'

const App = () => {
  const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/About', element: <About /> },
    { path: '/SignIn', element: <SingIn /> },
  ]);

  return routes;
}

export default App;





