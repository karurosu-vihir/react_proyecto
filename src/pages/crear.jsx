import styled from "styled-components"
import TituloForm from "../componentes/TituloForm"
import Formulario from "../componentes/Form"

const Section = styled.section`
    display: flex;
    flex-direction: column;
    padding: 90px 0;
`

const Crear = () => {
    return<>
        <Section>
            <TituloForm/>
            <Formulario/>
        </Section>
    </>
}

export default Crear

// background: #191919;
