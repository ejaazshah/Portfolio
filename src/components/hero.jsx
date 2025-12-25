import './hero22.css'
import heroimg from  '../assets/12-edited-and-croped.png'
import A from './a'
function Hero(){
  return(
    
    <div className="main-container">
          <div className="hero-section flex ">
      
    <div className="text-div flex flex-col items-start justify-center flex-1 text-top md:text-left">
        <h1 className="h1">Hi</h1>
        {/* h3    text-2xl sm:text-3xl md:text-4xl   mt-2 */}
        <h3 className=" h1">I'Am <span className="font-bold text-indigo-900">Ejaaz shah</span></h3>
        <h3 className="main-div-font-style h3">A Front-end Devloper</h3>
        <p className="hero-para">I specialize in turning ideas into digital experiences using modern technologies like <span className="">HTML</span> , <span className="css">CSS</span> , <span className="js">JavaScript</span> and React.</p>
        <p className="hero-para"><span className="hero-lets">Let’s</span> build something amazing together.</p>
        <button className="hero-btn">
          {/* <a href="#contact" className="btn-hero" id='con'>Contact Me</a>   */}

          <A href='#contact' name='Contact Me'  clasName='btn-hero' id='con'/>
        </button>
       
    </div>
    <div className="img-hero">
      <img  src={heroimg} alt="my picture"/>
    </div>





    </div>
    </div>
  )
}


export default Hero;