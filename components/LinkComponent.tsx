import Link from "next/link";
import 'animate.css';
import { handleAnimation } from "@/animation";

type LinkProps = {
  link:string,
  renderIcon:any,
  text:string,
  id:string,
}

const LinkComponent = ({link, renderIcon, text, id}:LinkProps) => {

  const icon = renderIcon();
  return (
    <Link 
    id={id}
    href={link} 
    className="link animate__animated"
    onMouseEnter={((event) => handleAnimation(event, "animate__pulse"))}
    >
      {icon}
      <p className="link-text">{text}</p>
    </Link>
  )
}
export default LinkComponent
