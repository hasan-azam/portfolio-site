import logo from "../assets/hasanAzamLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { Link } from "react-router-dom"; 



const navbar = () => {
  return  <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
      <Link to="/">  
      <img className="mx-2 w-10" src={logo} alt="logo"></img>
      </Link>
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
       <a href="https://www.linkedin.com/in/hasan-azam/" target="_blank"><FaLinkedin /></a> 
        <a href="https://github.com/hasan-azam" target="_blank"><FaGithub /></a>
        <a href="https://bsky.app/profile/hasanazam.com" target="_blank"><FaBluesky /></a>

       
    </div>
  </nav>
};

export default navbar