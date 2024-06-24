import styled from "styled-components"
import Card from "./Card"

const Rectagnle = styled.section`
    height: 530px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 20px;
    padding-bottom: 93px;
    .titulo-container{
        width: 432px;
        height: 70px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 1024px) {
            align-self: center;
        }
    }
    .titulo-container h2{
        font-size: 32px;
        line-height: 38px;
        color: #F5F5F5;
    }
    .cards-container{
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
        overflow-x: scroll;
        overflow-y: hidden;
        @media (max-width: 1024px) {
            align-self: center;
        }
    }
`

const Container = () =>{
    return<Rectagnle>
        <div className="titulo-container" style={{background: `#6BD1FF`}}>
            <h2>FRONT END</h2>
        </div>
        <div className="cards-container">
            <Card/>
        </div>
    </Rectagnle>
}

export default Container
