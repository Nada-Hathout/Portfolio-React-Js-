import { Fragment } from 'react';
import '../styles/HeroSection.css' 
function HeroSection(){
    return(
        <>

          <div className='hero container-fluid'>
          <div className=" row align-items-center justify-content-center">
            <div className="hero-content col-md-6 slide-down">
                <h1 className="hero-title">Nada Gamal</h1>
                <p className="hero-subtitle">Full Stack Developer (.Net+Angular)</p>
            </div>
            <div className="hero-img col-md-6 img-fluid text-center slide-up">
                <img className='hero-photo' src="/images/dody (1).png" alt="Logo" width="150" />
            </div>
        </div>
      </div>
 
          <div className=' about container-fluid'>
          <div className=" row align-items-center justify-content-center text-center">
            <div className="hero-content col-md-4 ">
                <h4 className="about-title">About Me</h4>
            </div>
            <div className="hero-img col-md-8 img-fluid text-start ">
                <p>I’m Nada Gamal, a passionate Full Stack Web Developer with a strong focus on building modern web applications using Angular and ASP.NET Core Web API.<br />I recently graduated from the Information Technology Institute (ITI) – PD & PI track – where I developed full-featured systems following clean architecture principles. I enjoy turning complex problems into efficient and user-friendly solutions, with experience in Entity Framework, SQL Server, and Azure Blob Storage integration.I’m currently looking for opportunities to grow as a .NET Backend or Full Stack Developer, where I can apply my skills in scalable and high-performance web systems.</p>
                 <a
      href="/Nada-Gamal-Hathout-Full-Stack.pdf"             // المسار النسبي داخل مجلد public
      download="Nada-Gamal-Hathout-Full-Stack.pdf" // الاسم اللي هيظهر عند التحميل
      className="btn btn-dark mt-3"
    >
      Download CV
    </a>
            </div>
        </div>
      </div>
        </>
    )
}

export default HeroSection;