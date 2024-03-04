import {
    faGithub,
    faYoutube,
    faFacebook,
    faLinkedin,
    faTelegram,
    faInstagram,
    faBloggerB, faXTwitter
} from '@fortawesome/free-brands-svg-icons';
import {IconDefinition} from "@fortawesome/free-solid-svg-icons";

export const TEXT_LOADING = "loading...";
export const WEBSITE_NAME = "Moh Ravi Dwi Putra";
export const WEBSITE_SUBTITLE = ['Software Engineer', 'Tech Enthusiast', 'Content Creator', 'Digital Marketer', 'Full Stack Developer']
export const WEBSITE_SLOGAN = "Make it as beautiful and functional as possible."

export interface RelatedLinks {
    label: string;
    link: string;
    icon: IconDefinition;
}

export const RELATED_LINKS: RelatedLinks[] = [
    {label: "Github", link: "https://github.com/rdp77", icon: faGithub},
    {label: "YouTube", link: "https://www.youtube.com/@ravidwiputra", icon: faYoutube},
    {label: "Facebook", link: "https://web.facebook.com/ravidwiputra77/", icon: faFacebook},
    {label: "Linkedin", link: "https://www.linkedin.com/in/ravidwiputra", icon: faLinkedin},
    {label: "Telegram", link: "https://t.me/rdp77", icon: faTelegram},
    {label: "Instagram", link: "https://www.instagram.com/ravidwiputraa/", icon: faInstagram},
    {label: "Twitter", link: "https://twitter.com/ravidwiputra/", icon: faXTwitter},
];

