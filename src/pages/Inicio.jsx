import { useContext } from "react"
import Banner from "../componentes/Banner"
import Container from "../componentes/Container"
import { Context } from "../Context/GlobalContext"
import Modal from "../componentes/Modal"


const Inicio = () => {
    const { videos, Equipos } = useContext(Context)
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