import './hero.css'
import heroimg from  '../assets/12-edited-and-croped.png'
function Hero(){
  return(
    
    <div className="hero-section  flex flex-wrap justify-around gap-8 pt-12 w-full rounded-xl shadow-[0_15px_30px_rgba(0,0,0,0.3)] z-20">
      
    <div className="text-div flex-1 flex flex-col items-start text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl h1">Hi</h1>
        <h3 className="text-2xl sm:text-3xl md:text-4xl   mt-2 h1">I'Am <span className="font-bold text-indigo-900">Ejaaz shah</span></h3>
        <h3 className="main-div-font-style">A Front-end Devloper</h3>
        <p className="hero-para">I specialize in turning ideas into digital experiences using modern technologies like <span className="">HTML</span> , <span className="css">CSS</span> , <span className="js">JavaScript</span> and React.</p>
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