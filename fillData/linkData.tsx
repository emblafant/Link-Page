//Fill in link data accourding to syntax
/*
  {
    icon: {
      name: "",
      library: "",
    },
    text: "",
    link: "",
  },
*/

//Import your icons, read instructions down below
//https://react-icons.github.io/react-icons/
import { FaAddressCard, FaGithubAlt, FaLinkedin, FaEnvelope } from "react-icons/fa"

const linkData = [
  {
    icon: FaAddressCard,
    text: "Resume",
    link: "/myResume.pdf",
  },
  {
    icon: FaGithubAlt,
    text: "Github",
    link: "https://github.com/emblafant",
  },
  {
    icon: FaLinkedin,
    text: "LinkedIn",
    link: "https://www.linkedin.com/in/embla-wallen/",
  },  {
    icon: FaEnvelope,
    text: "Email",
    link: "mailto:embla98wallen@gmail.com",
  },
];
export default linkData