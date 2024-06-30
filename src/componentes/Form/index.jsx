import { useContext, useRef, useState } from "react"
import styled from "styled-components"
import { Context } from "../../Context/GlobalContext"
import { useNavigate } from "react-router-dom"

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    height: 867px;
    width: 90%;
    align-items: center;
    justify-content: space-evenly;
    margin-top: 30px;
    align-self: center;
    .textarea{
        height: 250px;
    }
    @media(max-width:750px){
        height: 850px;
        justify-content: flex-start;
        .textarea{
            margin-bottom: 20px;
        }
    }
`

const TituloContainer = styled.div`
    height: 91px;
    align-self: stretch;
    border-top: 3px solid #262626;
    border-bottom: 3px solid #262626;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media(max-width:750px){
        margin-bottom: 30px;
        padding: 20px;
    }
`

const H3 = styled.h3`
    font-weight: 600;
    font-size: 36px;
    line-height: 24px;
    color: #FFFFFF;
`

const Lines = styled.div`
    display: flex;
    justify-content: space-between;
    height: 108px;
    width: 100%;
    @media(max-width:750px){
        flex-direction: column;
        margin-bottom: 130px;
        align-items: center;
    }
    .botones{
        display: flex;
        gap: 40px;
    }
`

const Fieldset = styled.fieldset`
    display: flex;
    flex-direction: column;
    border: none;
    width: 50%;
    legend{
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        text-transform: capitalize;
        color: #FFFFFF;
        margin-bottom: 10px;
    }
    input, select, textarea{
        background: #191919;
        border: 3px solid #262626;
        border-radius: 10px;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 24px;
        color: #A5A5A5;
        width: 100%;
        padding: 15px 10px;
    }
    textarea{
        width: 100%;
        height: 200px;
        font-size: 18px;
        resize: none;
    }
    .textarea{
        height: 350px;
    }
`

const Button = styled.input`
    width: 180px;
    height: 54px;
    border-radius: 15px;
    font-weight: 900;
    font-size: 20px;
    line-height: 24px;
    color: white;
    border: 3px solid ${props=> props.type === "submit" ? "#2271d1" : "#f5f5f5"};
    background-color: transparent;
    cursor: pointer;
` 

const Formulario = () =>{

    const {titulos, Equipo, cambioSelect, text, cambioText, setText, setEquipo, selectitems_menu,
            mensajes, tiposerror} = useContext(Context)

    // Dom de los inputs
    const inputTitulo = useRef(null)
    const inputImg = useRef(null)
    const inputVideo = useRef(null)
    const inputSelect = useRef(null)

    // Navegacion
    const nave = useNavigate() 

    // POST
    async function crearVideos({titulo,img,video,categoria,descripcion}){
        try{
            const conexion = await fetch("http://localhost:3000/Videos",{
                method:"POST",
                headers:{"Content-type":"application/json"},
                body:JSON.stringify({
                    titulo,
                    img,
                    video,
                    categoria,
                    descripcion
                })
            });
        
        if (!conexion.ok) {
                throw new Error('Network response was not ok');
            }
        }catch(error){
            console.error("Error while creating videos:", error);
        }
    }

    // Validacion
    function verficarcampo(input) {
        let mensaje = "";
        input.setCustomValidity("");
    
        tiposerror.forEach(error => {
            if (input.validity[error]) {
                mensaje = mensajes[input.name][error];
            }
        })
        if(mensaje !== ""){
            input.style.borderColor = 'red'
            input.style.color = 'red'
            input.value = mensaje
        }
        return mensaje;
    };

    // Guardar Datos
    const guardar = async(e) =>{
        e.preventDefault();
        let error = false;
        if(Equipo === ""){
            inputSelect.current.style.borderColor = 'red'
            inputSelect.current.style.color = 'red'
            error = true
        }
        else if(verficarcampo(inputTitulo.current) !== ""){
            error = true 
        }
        else if(verficarcampo(inputImg.current) !== ""){
            error = true
        }
        else if(verficarcampo(inputVideo.current) !== ""){
            error = true 
        }
        if(error){
            return
        }
        else{
        
            let datosaenviar = {
                titulo: inputTitulo.current.value,
                img: inputImg.current.value,
                video: inputVideo.current.value,
                categoria: Equipo,
                descripcion: text
            };
            setEquipo("")
            setText("")
            inputTitulo.current.value = ""
            inputImg.current.value = ""
            inputVideo.current.value = "" 
            try {
                await crearVideos(datosaenviar);
                alert("Los datos han sido guardados");
                selectitems_menu('/')
                nave('/');
            } catch (error) {
                alert("Error while saving data");
            }
        }
    }

    const camposPorDefecto = (input) => {
        input.style.borderColor = '#262626'
        input.style.color = '#A5A5A5'
        if(input.name === "categoria"){
            return
        }
        else{
            input.value = ""
        }
    }

    // Limpiar campos
    const reset = (e) =>{
        e.preventDefault()
        setEquipo("")
        setText("")
        camposPorDefecto(inputTitulo.current)
        camposPorDefecto(inputImg.current)
        camposPorDefecto(inputVideo.current)
        camposPorDefecto(inputSelect.current)
    }
    
    const Alcargar = () => {
        setEquipo("")
        setText("")
    }

    return<FormStyle onSubmit={guardar} onReset={reset} onLoad={Alcargar} noValidate>
            <TituloContainer>
                <H3>Crear Tarjeta</H3>
            </TituloContainer>
            <Lines>
                <Fieldset>
                    <legend htmlFor="titulo">Título</legend>
                    <input ref={inputTitulo} name="titulo" type="text" placeholder="Título del video" maxLength="30" minLength="3" required
                    onClick={()=>{camposPorDefecto(inputTitulo.current)}} />
                </Fieldset>
                <Fieldset>
                    <legend>Categoria</legend>
                    <select ref={inputSelect} value={Equipo} onChange={cambioSelect} name="categoria" onClick={()=>{camposPorDefecto(inputSelect.current)}}>
                        <option value="" disabled defaultValue="" hidden>Escoja una categoria</option>
                        {titulos.map((equipo, index)=><option key={index} value={equipo}>{equipo}</option>)}
                    </select>
                </Fieldset>
            </Lines>
            <Lines>
                <Fieldset>
                    <legend htmlFor="img">Imagen</legend>
                    <input ref={inputImg} name="img" type="text" placeholder="Link de la imagen" minLength="15" required 
                    pattern="https?://.*" onClick={()=>{camposPorDefecto(inputImg.current)}}/>
                </Fieldset>
                <Fieldset>
                    <legend htmlFor="video">Video</legend>
                    <input ref={inputVideo} name="video" type="text" placeholder="Link del video" minLength="15" required
                    pattern="https?:\/\/www\.youtube\.com\/embed\/.*" onClick={()=>{camposPorDefecto(inputVideo.current)}}/>
                </Fieldset>
            </Lines>
            <Lines className="textarea">
                <Fieldset>
                    <legend htmlFor="descripcion">Descripción</legend>
                    <textarea name="descripcion" id="descripcion"
                        placeholder="Enter your text here..."
                        maxLength="255"
                        value={text} 
                        onChange={cambioText}/>
                </Fieldset>
            </Lines>
            <Lines>
                <div className="botones">
                    <Button type="submit" value="Guardar"/>
                    <Button type="reset" value="Limpiar"/>
                </div>
            </Lines>
    </FormStyle>
}

export default Formulario

