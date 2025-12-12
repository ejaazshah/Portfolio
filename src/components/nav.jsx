import './nav.css'
import logo from '../../public/logo/EjaazShahlogo/vector/default-monochrome-black.svg'
import A from './a';
import {links} from '../data/links'
function Nav(){
  return (
    <header className='nav'>
     <img className="logo" src={logo} alt=""></img>
   <nav className=''>
      <ul>
          {
            links.map((link, index)=> (<a key={index}>{link.name}</a>) )
          }
      </ul>
    </nav>
    </header>
  )
}

export default Nav;