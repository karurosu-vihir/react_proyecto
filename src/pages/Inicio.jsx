import { useContext } from "react"
import Banner from "../componentes/Banner"
import Container from "../componentes/Container"
import { Context } from "../Context/GlobalContext"


const Inicio = () => {

    const { Videos, Equipos } = useContext(Context)
    return <>
        {Videos.length !== 0 &&
            <>
                <Banner/>
                {
                    Equipos.map((Equipo, index) => {
                        return <Container key={index} Equipo={Equipo}
                        videos={Videos.filter(Video=> Video.categoria === Equipo.titulo)}
                         />
                    })
                }
            </>
        }
    </>
}

export default Inicio