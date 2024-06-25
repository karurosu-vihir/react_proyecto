import { useContext } from "react"
import styled from "styled-components"
import { Context } from "../../../Context/GlobalContext"

const CardsStyle = styled.div`
    width: 430px;
    height: 320px;
    .img{
        border: 5px solid ${props=> props.color};
        border-radius: 15px 15px 0px 0px;
        width: 100%;
        height: 261px;
        box-shadow: inset 0px 0px 17px 8px ${props=> props.color};
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 59px;
    width: 100%;
    box-shadow: inset 0px -4px 5px 3px ${props=> props.color};
    border-radius: 0px 0px 15px 15px;
    border-width: 0px 5px 5px 5px;
    border-style: solid;
    border-color: ${props=> props.color};
    margin-top:-6px;
    background-color: black;
    color: white;
    img{
        width: 25px;
        height: 28px;
    }
`

const Borrar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`

const Editar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    cursor: pointer;
`

const Card = ({video, color}) => {

    const {setBannerContent} = useContext(Context)

    return<CardsStyle color={color}>
        <img src={video.img} alt={video.titulo} className="img" onClick={()=>{
            const videotemp = {...video}
            videotemp.color = {color} 
            setBannerContent(videotemp)
            }}/>
        <Info color={color}>
            <Borrar>
                <img src="/icons/trash.png" alt="Eliminar"/>
                <p>BORRAR</p>
            </Borrar>
            <Editar>
                <img src="/icons/edit.png" alt="Editar"/>
                <p>EDITAR</p>
            </Editar>
        </Info>
    </CardsStyle>
}

export default Card

