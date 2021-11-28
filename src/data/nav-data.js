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
    },
    {
        text: "Twitter",
        icon: faTwitter,
    },
    {
        text: "Linkedin",
        icon: faLinkedin,
    },
    {
        text: "Something",
        icon: faAddressBook,
    },
];