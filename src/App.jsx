import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import PaginaBase from "./pages/PaginaBase"

function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<PaginaBase/>}>
           <Route index element={<Inicio/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
