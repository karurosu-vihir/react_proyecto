import { useContext } from "react"
import styled from "styled-components"
import { Context } from "../../Context/GlobalContext"
import { useNavigate } from "react-router-dom"

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
        border: inset 5px solid ${props=> props.color};
        box-shadow: 0px 0px 17px 8px ${props=> props.color};
        border-radius: 15px;
        cursor: pointer;
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
        width: 350px;
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
    const {BannerContent} = useContext(Context)
    const nave = useNavigate();

    const SendMostrarVideo = () => {
        
        nave(`/video/${BannerContent.id}`);
    }

    return<BannerMain>
        { BannerContent.length !==0 &&
            <Clipper color={BannerContent.color.color}>
                <Info>
                    <h2 style={{background: `${BannerContent.color.color}`}}>{BannerContent.categoria}</h2>
                    <h3>{BannerContent.titulo}</h3>
                    <p>{BannerContent.descripcion}</p>
                </Info>
                <img src={BannerContent.img} alt="titulo" onClick={()=>{SendMostrarVideo()}} />
            </Clipper>
        }
    </BannerMain>
}

export default Banner