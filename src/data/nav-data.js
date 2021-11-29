import {
    faGithub,
    faLinkedin,
    faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import {
    faLaptop,
    faHome,
    faComment,
    faAddressBook,
} from "@fortawesome/free-solid-svg-icons";

export const navContent = [
    {
        text: "Acceuil",
        icon: faHome,
        link:"#acceuil"
    },
    {
        text: "À propos",
        icon: faComment,
        link:"#acceuil"
    },
    {
        text: "Mes Projets",
        icon: faLaptop,
        link:"#work"
    },
    {
        text: "Contact",
        icon: faAddressBook,
        link:"#contact"
    },
];
export const navContentSocial = [
    {
        text: "GitHub",
        icon: faGithub,
        link:"https://github.com/Eryans/"
    },
    {
        text: "Twitter",
        icon: faTwitter,
        link:"https://twitter.com/JulesNoir"
    },
    {
        text: "Linkedin",
        icon: faLinkedin,
        link:"https://www.linkedin.com/in/jules-noir-354350220/"
    }
];