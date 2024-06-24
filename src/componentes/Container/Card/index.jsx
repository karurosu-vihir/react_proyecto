import styled from "styled-components"

const CardsStyle = styled.div`
    width: 430px;
    height: 320px;
    .img{
        border: 5px solid #6BD1FF;
        border-radius: 15px 15px 0px 0px;
        width: 100%;
        height: 261px;
        box-shadow: inset 0px 0px 17px 8px #6BD1FF;
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 59px;
    width: 100%;
    box-shadow: inset 0px -4px 5px 3px #6BD1FF;
    border-radius: 0px 0px 15px 15px;
    border-width: 0px 5px 5px 5px;
    border-style: solid;
    border-color: #6BD1FF;
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

const Card = () => {
    return<CardsStyle>
        <img src="/img/BannerImg.png" alt="titulo" className="img"/>
        <Info>
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

