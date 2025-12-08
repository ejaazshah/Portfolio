import './hero.css'
import heroimg from  '../assets/12-edited-and-croped.png'
function Hero(){
  return(
    
    <div className='hero-section'>
      
    <div className="text-div">
        <h1 className="main-div-font-style">Hi</h1>
        <h3 className="main-div-font-style">I'Am <span className="hero-spn">Ejaaz shah</span></h3>
        <h3 className="main-div-font-style">A Front-end Devloper</h3>
        <p className="hero-para">I specialize in turning ideas into digital experiences using modern technologies like <span className="html">HTML</span> , <span className="css">CSS</span> , <span className="js">JavaScript</span> and React.</p>
        <p className="hero-para"><span className="hero-lets">Let’s</span> build something amazing together.</p>
        <button className="btn-hero">
          <a href="#contact" className="btn-hero">Contact Me</a>  
        </button>
       
    </div>
    <div className="img-hero">
      <img src={heroimg} alt="my picture"/>
    </div>





    </div>
  )
}


export default Hero;