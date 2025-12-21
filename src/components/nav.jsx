import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './nav.css'
import logo from '../../public/logo/EjaazShahlogo/vector/default-monochrome-black.svg'

import {links} from '../data/links'
import A from "./a";
// import Aboutpage from './aboutpage';
function Nav(){
  const navigate = useNavigate(); // <-- useNavigate hook

  const handleClick = (path, e) => {
    e.preventDefault(); // stop page reload
    navigate(path);     // navigate programmatically
  };
  return (
    <header className='nav'>
     <img className="logo" src={logo} alt=""></img>
   <nav className=''>
      <ul>
        
          {

            links.map((link, index)=> ( 
              <li key={index}>
              {/* <Link to={link.href} className={link.clsname}>{link.name}</Link> */}
              <a  href={link.href}  onClick={(e) => handleClick(link.href, e)}>{link.name}</a>
              </li>
              
              
            ) )

          }
      </ul>
    </nav>
    </header>
  )
}

export default Nav;