import styled from "styled-components"
import { Link, useLocation } from "react-router-dom"
import { useContext, useState } from "react"
import { Context } from "../../Context/GlobalContext"

const Header = styled.header`
    display: flex;
    height: 125px;
    background-color:#262626;
    padding: 0 50px;
    justify-content: space-between;
    align-items: center;
    border-bottom: 4px solid #2271D1;
    box-shadow: 0px 5px 29px rgba(34, 113, 209, 0.7);
    img{
        height: 40px;
        width: 169px;
    }
`

const GrupoBotones = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    .Link{
        display: flex;
        width: 180px;
        height: 54px;
        border-radius: 10px;
        font-weight: 900;
        font-size: 20px;
        line-height: 24px;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        justify-content: center;
        align-items: center;
    }
    .Home{
        box-shadow: inset 0px 0px 12px 4px #2271D1;
        color: #2271D1;
        border: 2px solid #2271D1;
    }
    .Video{
        border: 2px solid #F5F5F5;
        color: #FFFFFF;
    }

`

const Cabecera = () => {

    const {botones, selectitems_menu, selectitems_menuindex} = useContext(Context)

    const location = useLocation()

    return <Header onLoad={()=>{selectitems_menu(location.pathname)}}>
        <img src="./img/logo.png" alt="logo" />
        <GrupoBotones>
            {
                botones.map((boton,index)=>{
                    return <Link key={index} to={boton.link} className={`Link ${boton.selected ? "Home":"Video"}`}
                    onClick={()=>{selectitems_menuindex(index)}}>{boton.titulo}</Link>
                })
            }
        </GrupoBotones>
    </Header>
}

export default Cabecera
