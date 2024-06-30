import { Outlet } from "react-router-dom"
import Cabecera from "../componentes/Cabecera"
import Pie from "../componentes/Pie"
import { ContextProvider } from "../Context/GlobalContext"
import styled from "styled-components"

const Main = styled.main`
    @media (max-width: 760px) {
        padding-bottom: 128px;
    }
`

const PaginaBase = () => {
    return <>
        <ContextProvider>
            <Cabecera />
            <Main>
                <Outlet />
            </Main>
            <Pie/>
        </ContextProvider>
    </>
}

export default PaginaBase
