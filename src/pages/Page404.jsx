import styled from "styled-components"

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 80vh;
`

const H2 = styled.h2`
    color: rgb(34, 113, 209);
    font-size: 190px;
`

const P = styled.p`
    color: white;
    font-size: 45px;
`

const Page404 = () => {
    return<Section>
        <H2>404</H2>
        <P>Esta pagina no existe</P>
    </Section>
} 

export default Page404