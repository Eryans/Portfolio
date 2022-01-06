import cardBackground from  "../images/cards.jpg";
import starwarsBackground from "../images/starwars.jpg";
import tdgBackground from "../images/terredegeek.jpg";
import norimmoBackground from "../images/norimmobg.jpg";
import bankBackground from "../images/money.jpg";

export const content = [
    {
        name: "Memory Game",
        description: "Un jeu de mémoire réalisé en javascript pendant ma formation à l'AFPA",
        img: cardBackground,
        url:"https://github.com/Eryans/Memory-Card-Game"
    },
    {
        name: "Money Manager (WIP)",
        description: "Projet fil rouge de la formation, il s'agit d'une application bancaire réalisé en php avec gestion de base de données.",
        img: bankBackground,
        url:"https://github.com/Eryans/MoneyManager/tree/dev_oop_mvc"
    },
    {
        name: "Star Wiki",
        description: "(WIP) Une application utilisant l'api SWAPI afin d'afficher des données sur des personnages et éléments de l'univers Star Wars",
        img: starwarsBackground,
        url:"https://github.com/Eryans/StarWarsReactApp"
    },
    {
        name: "Terre de Geek",
        description: "Un site d'e-commerce responsif réalisé comme premier projet front-end html/css seulement",
        img: tdgBackground,
        url:"https://github.com/Eryans/TerreDeGeek"
    },
    {
        name: "NorImmo",
        description: "Une appli d'une fausse agence immoblière réalisé en projet de groupe. code 100% fonctionnel, design 100% volontairement moche",
        img: norimmoBackground,
        url:"https://github.com/Eryans/NorImmo"
    }
]