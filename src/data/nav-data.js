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
        ref:0
    },
    {
        text: "À propos",
        icon: faComment,
        ref:0
    },
    {
        text: "Mes Projets",
        icon: faLaptop,
        ref:1
    },
    {
        text: "Contact",
        icon: faAddressBook,
        ref:2
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