import './nav.css'
import logo from '../../public/logo/EjaazShahlogo/vector/default-monochrome-black.svg'
function nav(){
  return (
    <header className='nav'>
     <img class="logo" src={logo} alt=""></img>
   <nav className=''>
      <ul>
        <a  href="#" className='ejaaz-custom-font'>Home</a>
        <a  href="#">About</a>
        <a href="#">Projects</a>
        <a href="#">Contact</a>
      </ul>
    </nav>
    </header>
  )
}

export default nav;