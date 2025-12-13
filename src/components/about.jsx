import './about22.css'
function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h1 id="about-h1">About Me</h1>
        <h3>A blank screen and an idea — that’s where the fun begins</h3>

        <p className="about-para">
         I’m a front-end developer focused on building clean, responsive, and accessible interfaces with HTML, CSS, JavaScript, and React. I turn ideas into practical, user-friendly web experiences.
        </p>

        <a href="/about" className="btn-about">
          About Me
        </a>
      </div>
    </section>
  );
}

export default About;
