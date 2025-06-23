
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './css/App.css'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import MovieDetails from './components/MovieDetails';
import Layout from './components/Layout';
import NotFound from './components/NotFound'

let routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'navbar', element: <NavBar /> },
      { path: "movie-detail/:imdbID/:Title", element:  <MovieDetails/>},
      { path: "*", element: <NotFound/>},
    ],
  },
]);


function App() {

  return (
        <>
        <RouterProvider router={routes}></RouterProvider>

    </>
  )
}

export default App
