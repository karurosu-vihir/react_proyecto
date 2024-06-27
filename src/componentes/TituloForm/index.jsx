import styled from "styled-components"

const Titulo = styled.div`
    text-align: center;
`

const H2 = styled.h2`
    font-size: 60px;
    line-height: 70px;
    font-weight: 900;
    color: #F5F5F5;
    text-transform: uppercase;
`

const P = styled.p`
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #FFFFFF;
`

const TituloForm = () =>{
    return<>
        <Titulo>
            <H2>nuevo video</H2>
            <P>
                Complete el formulario para crear una nueva tarjeta de video
            </P>
        </Titulo>
    </>   
}

export default TituloForm

