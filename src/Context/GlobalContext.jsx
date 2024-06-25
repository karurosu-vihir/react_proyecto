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

    const [videos, setVideos] = useState(...Videos) 

    const [BannerContent, setBannerContent] = useState([])

    return (<Context.Provider value={{ Equipos, setEquipos, Videos, setVideos, BannerContent, setBannerContent }}>
        {children}
    </Context.Provider>
    )
}