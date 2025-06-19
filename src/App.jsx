import { Container } from "react-bootstrap"
import NavigationBar from "./components/NavigationBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Movies from "./pages/Movies"
import Error404 from "./pages/Error404"
import AddMovie from "./pages/AddMovie"
import MovieDetail from "./pages/MovieDetail"

function App() {

  return (
    <Container>
      <BrowserRouter>
        <NavigationBar />
          <Routes>
            <Route path='' Component={Movies} />
            <Route path='movies' Component={Movies}/>
            <Route path='add-movie' Component={AddMovie}/>
            <Route path='movie-details' Component={MovieDetail} />
            <Route path='*' Component={Error404}/>
          </Routes>
      </BrowserRouter>
    </Container>
  )
}

export default App
