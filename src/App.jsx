import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import PaginaBase from "./pages/PaginaBase"
import Page404 from "./pages/Page404"
import Crear from "./pages/crear"


function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<PaginaBase/>}>
              <Route index element={<Inicio/>}></Route>
              <Route path="/form" element={<Crear/>}></Route>
              <Route path="*" element={<Page404/>}></Route>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

