import { createContext, useState } from "react";
import {Videos} from "../db.json"

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

    const [videos, setVideos] = useState([...Videos]) 

    const [BannerContent, setBannerContent] = useState([])

    const [botones,setbotones] = useState([
        {
            "titulo": "home",
            "link":"/",
            "selected": true
        },
        {
            "titulo": "nuevo viedo",
            "link":"/form",
            "selected": false
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


    return (<Context.Provider value={{ Equipos, setEquipos, Equipo, cambioSelect, videos, 
                                        setVideos, BannerContent, setBannerContent, botones, 
                                        selectitems_menu, selectitems_menuindex, titulos, 
                                        text, cambioText, setText, setEquipo,setestadoModal,
                                        estadoModal, videoModal, setvideoModal
                                    }}>
        {children}
    </Context.Provider>
    )
}