import { useContext } from "react"
import styled from "styled-components"
import { Context } from "../../Context/GlobalContext"

const Footer = styled.footer`
    display: flex;
    height: 125px;
    background-color:#262626;
    justify-content: center;
    align-items: center;
    border-top: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
    img{
        height: 40px;
        width: 169px;
    }
`

const Pie = () => {
    const {esmobil} = useContext(Context)
  
    return(<>
            {esmobil &&
                <Footer>
                    <img src="./img/logo.png" alt="logo" />
                </Footer>
            }
        </>
    )
}

export default Pie
