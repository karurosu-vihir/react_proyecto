import { createContext, useEffect, useState } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
    const [Equipos, setEquipos] = useState([
    {
        titulo: "BACK END",
        color: "#57C278"
    },
    {
        titulo: "FRONT END",
        color: "#82CFFA"
    },
    {
        titulo: "DATA SCIENCE",
        color: "#A6D157"
    },
    {
        titulo: "DEVOPS",
        color: "#E06B69"
    },
    {
        titulo: "UX Y DISEÑO",
        color: "#DB6EBF"
    },
    {
        titulo: "MOVIL",
        color: "#FFBA05"
    },
    {
        titulo: "INOVACION Y GESTION",
        color: "#FF8A29"
    }
    ])

    const [Equipo, setEquipo] = useState("")

    const [videos, setVideos] = useState([]) 

    const [BannerContent, setBannerContent] = useState([])

    const [botones,setbotones] = useState([
        {
            "titulo": "home",
            "link":"/",
            "selected": true,
            "iconDefault": "./icons/HomeDefault.png",
            "iconSelected": "./icons/HomeSelected.png"
        },
        {
            "titulo": "nuevo viedo",
            "link":"/form",
            "selected": false,
            "iconDefault": "./icons/AddDefault.png",
            "iconSelected": "./icons/AddSelected.png"
        }
    ])

    const selectitems_menu = (title) => {
        const items = botones.map((item)=>{
            if(title === item.link){
                item.selected = true
            }
            else{
                item.selected = false
            }
            return item
        })
        setbotones(items)
    }

    const selectitems_menuindex = (id) => {
        const items = botones.map((item,index)=>{
            if(id === index){
                item.selected = true
            }
            else{
                item.selected = false
            }
            return item
        })
        setbotones(items)
    }
    
    // Select
    const cambioSelect = (e) =>{
        setEquipo(e.target.value);
    } 

    const [text, setText] = useState("");
    const cambioText = (e) =>{
        setText(e.target.value);
    }
    
    const titulos = Equipos.map(equipo => equipo.titulo);

    const [estadoModal, setestadoModal] = useState(false)
    
    const [videoModal, setvideoModal] = useState([])

    // Custom Errors
    // Lista de Errores
    const tiposerror = ["valueMissing", "patternMismatch", "tooShort", "typeMismatch", "customError"];

    // Mensajes de error
    const mensajes = {
        titulo: {
            valueMissing: "El campo de titulo no puede estar vacío.",
            tooShort: "El titulo es demasiado corto",
            tooLong: "Muy Largo"
        },
        img: {
            valueMissing: "El campo de imagen no puede estar vacío.",
            patternMismatch: "Ingrese URL con HTTP o HTTPS.",
            tooShort: "Muy Corto",
            tooLong: "Muy Largo"
        },
        video: {
            valueMissing: "El campo de video no puede estar vacío.",
            patternMismatch: "Ingrese un URL /embed de youtube",
            tooShort: "Muy Corto",
            tooLong: "Muy Largo"
        }
    };

    const [esmobil, setesmobil] = useState(true)
 
    return (<Context.Provider value={{ Equipos, setEquipos, Equipo, cambioSelect, videos, 
                                        setVideos, BannerContent, setBannerContent, botones, 
                                        selectitems_menu, selectitems_menuindex, titulos, 
                                        text, cambioText, setText, setEquipo,setestadoModal,
                                        estadoModal, videoModal, setvideoModal, mensajes, 
                                        tiposerror, esmobil, setesmobil
                                    }}>
        {children}
    </Context.Provider>
    )
}