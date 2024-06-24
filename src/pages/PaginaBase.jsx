import { Outlet } from "react-router-dom"
import Cabecera from "../componentes/Cabecera"
import Pie from "../componentes/Pie"



const PaginaBase = () => {
    return <>
        <Cabecera />
        <main style={{background: `rgba(0, 0, 0, 0.9)`}}>
            <Outlet />
        </main>
        <Pie/>
    </>
}

export default PaginaBase
