import { useContext, useEffect } from "react"
import Banner from "../componentes/Banner"
import Container from "../componentes/Container"
import { Context } from "../Context/GlobalContext"
import Modal from "../componentes/Modal"
import { useLocation } from "react-router-dom"


const Inicio = () => {
    const { videos, setVideos, Equipos} = useContext(Context)

    useEffect(() => {
        async function Cargardatos(){
          const res = await fetch("http://localhost:3000/Videos")
          const data = await res.json();
          setVideos(data)
        }
        Cargardatos()
      }, [videos])

      const location = useLocation()

    return <>
        {videos.length !== 0 &&
            <>
                <Banner/>
                {
                    Equipos.map((Equipo, index) => {
                        return <Container key={index} Equipo={Equipo}
                        videos={videos.filter(Video=> Video.categoria === Equipo.titulo)}
                        />
                    })
                }
                <Modal/>
            </>
        }
    </>
}

export default Inicio