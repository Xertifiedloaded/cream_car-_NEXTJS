import Login from "../assets/images/arrow-right-to-bracket-solid.svg";
import Request from "../assets/images/code-pull-request-solid.svg";
import Faq from "../assets/images/address-card-regular.svg";
import image1 from "../assets/images/pic1.jpeg";
import image2 from "../assets/images/pic8.jpg";
import image3 from "../assets/images/pic3.jpg";
import image4 from "../assets/images/pic6.jpeg";

export const FooterItems = [
  {
    headline: "Cream",
    About: "About",
    contact: "Contact us",
    blog: "Blog",
    terms: "Terms and Condition",
  },
  {
    headline: "Categories",
    About: "Real estate",
    contact: "Auto mobile",
  },
  {
    headline: "Business",
    About: "Affliate marketing",
    contact: "List with us",
  },
  {
    headline: "Social media",
    About: "Instagram",
    contact: "Facebook",
    blog: "Twitter",
    terms: "LinkedIn",
    youtube:"Youtube"
  },
];

export const NavContent = [
  {
    content: "Home",
    path: "/",
  },
  {
    content: "Real Estate",
    path: "/real-estate",
  },
  {
    content: "Auto mobile",
    path: "/auto-mobile",
  },
  {
    content: "About",
    path: "/about",
  },
  {
    content: "contact us",
    path: "/contact-us",
  },
  {
    content: "Request",
    path: "/request",
  },
];

export const Nav = [
  {
    content: "Login",
    icon: Login,
    path: "/login",
  },
  {
    content: "Request",
    path: "/request",
    icon: Request,
  },
  {
    content: "Help and FAQ",
    path: "/faq",
    icon: Faq,
  },
  {
    content: "About",
    path: "/about",
    icon: Faq,
  },
  {
    content: "contact us",
    path: "/contact_us",
    icon: Faq,
  },
];

export const categories = [
  {
    image: image1,
    content: "Real Estate",
  },
  {
    image: image2,
    content: "Auto Mobile",
  },
  {
    image: image3,
    content: "Rentals",
    coming: "Comin soon",
  },
  {
    image: image4,
    content: "Resources",
    coming: "Comin soon",
  },
];
