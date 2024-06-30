import styled from "styled-components"
import Card from "./Card"

const Rectagnle = styled.section`
    height: 460px;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 20px;
    padding-bottom: 30px;
    margin-bottom: 63px;
    overflow-x: scroll;
    overflow-y: hidden;
    @media (max-width: 760px) {
        margin-top: 30px;
    }
    .titulo-container{
        width: 432px;
        height: 70px;
        border-radius: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: sticky;
        top: 0;
        left: 20px;
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
        gap: 30px;
    }
`

const Container = ({ Equipo, videos }) => {
    return<>
        { videos.length !== 0 &&
            <Rectagnle>
            <div className="titulo-container" style={{ background: `${Equipo.color}` }}>
                <h2>{Equipo.titulo}</h2>
            </div>
            <div className="cards-container">
                {
                    videos.map((video,index)=>{
                        return <Card key={index} video={video} color={Equipo.color}/>
                    })
                }
            </div>
        </Rectagnle>
        }
    </>
}

export default Container

