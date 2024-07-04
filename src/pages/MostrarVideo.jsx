import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import { Context } from "../Context/GlobalContext"

const Section = styled.section`

    color: #f5f5f5;
    padding: 50px 0;

    h2{
        font-size: 48px;
        text-align: center;
        color: #f5f5f5;
        margin-bottom: 10px;
    }
    iframe{
        width: 100%;
        height: 90vh;
        margin-bottom: 10px;
    }
    h3{
        font-size: 32px;
    }
    p{
        font-size: 20px;
    }

`


const MostrarVideo = () => {

    const { selectitems_menu } = useContext(Context)

    const { id } = useParams()

    const [Video, setVideo] = useState([])

    const [error, seterror] = useState(false)

    const nav = useNavigate()

    useEffect(() => {
        async function Cargardatos(){
          const res = await fetch(`http://localhost:3000/Videos?id=${id}`)
          const data = await res.json();
          setVideo(data)
          if(data.length === 0){
            seterror(true)
          }
          selectitems_menu("")
        }
        Cargardatos()
      }, [])

    return<Section> 
    { error? nav('/v') : Video.length !== 0 && <>
        <h2>{Video[0].titulo}</h2>
        <iframe src={Video[0].video} frameBorder="0"></iframe>
        <h3>{Video[0].categoria}</h3>
        <p>{Video[0].descripcion}</p>
        </>
    }
    </Section>
}

export default MostrarVideo;