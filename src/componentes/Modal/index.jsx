import { useContext, useRef, useState } from "react"
import styled from "styled-components"
import { Context } from "../../Context/GlobalContext"

const Overlay = styled.div`
background-color:rgba(3, 18, 47,.70);
    position:fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`
const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 900px;
    background: #03122F;
    padding: 0;
    border: 0;
    width: 70%;
    height: 1140px;
    display: flex;
    flex-direction: column;
    border: 5px solid #6BD1FF;
    border-radius: 15px;
    .cerrar {
            background: transparent;
            border: none;
            cursor: pointer;
            align-self: flex-end;
        }
    form {
        padding: 5% 20%;
        width: 100%;
        height: 100%;
        @media (max-width: 800px){
            padding: 5% 10%;
        }
        @media (max-width: 500px){
            padding: 0;
        }
        h3{
            color: #2271D1;
            text-transform: uppercase;
            font-weight: 900;
            font-size: 60px;
            line-height: 70px;
            align-self: center ;
        }
    }
`

const Formdiv = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;
`

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    width: 100%;
    border: none;
    legend{
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: white;
        margin-bottom: 10px;
    }
    input, select, textarea{
        border: 3px solid #2271D1;
        border-radius: 10px;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #a5a5a5;
        padding: 10px;
        background-color: transparent;
    }
    textarea{
        height: 112px;
    }
`

const Botones = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Button = styled.input`
    width: 180px;
    height: 54px;
    border-radius: 15px;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    color: ${props=> props.type === "submit" ? "#2271D1" : "#f5f5f5"};
    border: 2px solid ${props=> props.type === "submit" ? "#2271d1" : "#f5f5f5"};
    background-color: ${props=> props.type === "submit" ? "black" : "transparent"} ;
    cursor: pointer;
    box-shadow: ${props=> props.type === "submit" ? "inset 0px 0px 12px 4px #2271D1" : "none"};
` 

const Modal = () => {
    const {titulos, Equipo, cambioSelect, text, cambioText, setText, setEquipo, estadoModal, setestadoModal, videoModal} = useContext(Context)

    // Dom de los inputs
    const inputTitulo = useRef(null)
    const inputImg = useRef(null)
    const inputVideo = useRef(null)

    const guardar = (e) =>{
        e.preventDefault();
        let datosaenviar = {
            titulo: inputTitulo.current.value,
            img: inputImg.current.value,
            video: inputVideo.current.value,
            categoria: Equipo,
            descripcion: text
        };
        setEquipo("")
        setText("")
        console.log(datosaenviar)
        alert("Los datos han sido guardados")
    }

    // Limpiar campos
    const reset = (e) =>{
        e.preventDefault()
        setEquipo("")
        setText("")
        inputTitulo.current.value = ""
        inputImg.current.value = ""
        inputVideo.current.value = "" 
    }

    const Alcargar = () => {
        setEquipo(videoModal.categoria)
        setText(videoModal.descripcion)
        inputTitulo.current.value = videoModal.titulo
        inputImg.current.value =  videoModal.img
        inputVideo.current.value =  videoModal.video
    }

    return <>
            {estadoModal && <>
                    <Overlay />
                    <DialogEstilizado onLoad={Alcargar}>
                    <button className="cerrar" onClick={()=>{setestadoModal(false)}}>
                                <img src="./icons/X - cancel.png" alt="Cerrar" />
                            </button>
                        <form method="dialog" onSubmit={guardar} onReset={reset}>
                            <Formdiv>
                                <h3>Editar Card:</h3>
                                <Fieldset>
                                    <legend htmlFor="titulo">Título</legend>
                                    <input ref={inputTitulo} name="titulo" type="text" placeholder="Título del video"/>
                                </Fieldset>
                                <Fieldset>
                                    <legend>Categoria</legend>
                                    <select value={Equipo} onChange={cambioSelect}>
                                        {titulos.map((equipo, index)=><option key={index} value={equipo}>{equipo}</option>)}
                                    </select>
                                </Fieldset>
                                <Fieldset>
                                    <legend htmlFor="img">Imagen</legend>
                                    <input ref={inputImg} name="img" type="text" placeholder="Link de la imagen"/>
                                </Fieldset>
                                <Fieldset>
                                    <legend htmlFor="video">Video</legend>
                                    <input ref={inputVideo} name="video" type="text" placeholder="Link del video"/>
                                </Fieldset>
                                <Fieldset>
                                <legend htmlFor="descripcion">Descripción</legend>
                                <textarea name="descripcion" id="descripcion"
                                    placeholder="Enter your text here..." 
                                    value={text} 
                                    onChange={cambioText}/>
                                </Fieldset>
                                <Botones>
                                    <Button type="submit" value="Guardar"/>
                                    <Button type="reset" value="Limpiar"/>
                                </Botones>
                            </Formdiv>
                        </form>
                    </DialogEstilizado>
                </>
            }
    </>
}

export default Modal