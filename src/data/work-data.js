import cardBackground from  "../images/cards.jpg";
import starwarsBackground from "../images/starwars.jpg";
import tdgBackground from "../images/terredegeek.jpg";
import norimmoBackground from "../images/norimmobg.jpg";

export const content = [
    {
        name: "Memory Game",
        description: "Un jeu de mémoire réalisé en javascript pendant ma formation à l'AFPA",
        img: cardBackground,
        url:"https://eryans.github.io/Memory-Card-Game/"
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
        url:"https://eryans.github.io/TerreDeGeek/"
    },
    {
        name: "NorImmo",
        description: "Une appli d'une fausse agence immoblière réalisé en projet de groupe. code 100% fonctionnel, design 100% volontairement moche",
        img: norimmoBackground,
        url:"https://eryans.github.io/NorImmo/"
    }
]