import { Outlet } from "react-router-dom"
import Cabecera from "../componentes/Cabecera"
import Pie from "../componentes/Pie"
import { ContextProvider } from "../Context/GlobalContext"



const PaginaBase = () => {
    return <>
        <ContextProvider>
            <Cabecera />
            <main style={{background: `rgba(0, 0, 0, 0.9)`}}>
                <Outlet />
            </main>
            <Pie/>
        </ContextProvider>
    </>
}

export default PaginaBase
