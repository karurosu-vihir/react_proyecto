import { useContext, useEffect } from "react"
import Banner from "../componentes/Banner"
import Container from "../componentes/Container"
import { Context } from "../Context/GlobalContext"
import Modal from "../componentes/Modal"

const Inicio = () => {
    const { videos, setVideos, Equipos, esmobil} = useContext(Context)
    useEffect(() => {
        async function Cargardatos(){
          const res = await fetch("http://localhost:3000/Videos")
          const data = await res.json();
          setVideos(data)
        }
        Cargardatos()
      }, [videos])

    return <>
        {videos.length !== 0 &&
            <>
            {esmobil &&
                <Banner/>}
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