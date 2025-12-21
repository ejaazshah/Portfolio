import Nav from './nav'
import './aboutpage.css'
function Aboutpage(){
  return(
    <>
      <Nav />

    
      <main className='about-main-container'>
        <div className="about-whoIAm">
          <div className="about-text-div">
            <h1 className="main-div-font-style">Who Am I</h1>
            <h3 className='hero-h3'>
              I’m Ejaaz Shah, a front-end developer from South Asia Afghanistan.
              I enjoy turning ideas into user-friendly web experiences using
              HTML, CSS, JavaScript, and React. With an eye for detail and always
              eager to expand my skills, I aim to build clean, functional, and
              beautiful interfaces.
            </h3>
          </div>
        </div>

        {/* Education */}
        <div className="more-about-me">
          <div className="education-div">
            <div className="education-text-div">
              <h1 className="main-div-font-style">Education</h1>  
              <ul className="education-ul">
                <li>High School Graduate</li>
                <li>Studying Computer Science</li>
                <li>Learning Front-End Web Development</li>
                <li>
                  Improving skills through Udemy courses and self-learning
                </li>
              </ul>
            </div>
          </div>
        </div>

          <div className="my-skills">
            <div className="skils-div">
              <div className="skills-text-div">
                <h1 className="main-div-font-style">Skills</h1>
                <ul className="skills-ul">
                  <li>
                    <i className="fa-brands fa-html5"></i> HTML5
                  </li>
                  <li>
                    <i className="fa-brands fa-css3-alt"></i> CSS3
                  </li>
                  <li>
                    <i className="fa-brands fa-square-js"></i> JS
                  </li>
                  <li>
                    <i className="fa-brands fa-react"></i> React
                  </li>
                  <li>
                    <i className="fa-brands fa-github"></i> Version Control
                  </li>
                </ul>
              </div>
            </div>
          </div>
      </main>
    </>



  )
}

export default Aboutpage;