import styled from "styled-components"

const BannerMain = styled.section`
    background-image: url("/img/BannerImg.png");
    height: 832px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center bottom;
`
const Clipper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    img{
        width: 647px;
        height: 333px;
        align-self: center;
        border: inset 5px solid #6BD1FF;
        box-shadow: 0px 0px 17px 8px #6BD1FF;
        border-radius: 15px;
        @media (max-width: 1024px){
        width: 459px;
        height: 216px;
    }
    }
`

const Info = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    width: 666px;
    height: 305px;
    align-self: center;
    opacity: 1;
    @media (max-width: 1024px){
        width: 471px;
        height: 248px;
    }
    h2{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 282px;
        height: 65px;
        border-radius: 15px;
        font-weight: 800;
        font-size: 32px;
        line-height: 38px;
        color: #F5F5F5;
        margin: 0;
    }
    h3{
        font-weight: 400;
        font-size: 46px;
        color: #F5F5F5;
        line-height: 54px;
    }
    p{
        font-weight: 300;
        font-size: 18px;
        line-height: 21px;
        color: #F5F5F5;
    }
`

const Banner = () => {
    return<BannerMain>
        <Clipper>
            <Info>
                <h2 style={{background: `#6BD1FF`}}>FRONT END</h2>
                <h3>Challenge React</h3>
                <p>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</p>
            </Info>
            <img src="./img/BannerImg.png" alt="titulo" />
        </Clipper>
    </BannerMain>
}

export default Banner