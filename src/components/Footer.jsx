import '../styles/Footer.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Footer() {
  return (
    <>
      <footer className="footer-container container-fluid py-3">
        <div className="row align-items-center text-center text-md-start">
          
          <div className="col-md-6 mb-3 mb-md-0">
            <h5 className="mb-0">© 2024 Nada Gamal. All rights reserved.</h5>
          </div>

          <div className="col-md-6 d-flex justify-content-center justify-content-md-end align-items-center">
            <h5 className="me-3 mb-0">Follow me:</h5>
            <div className="social-icons">
              <a href="#" className="me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="me-3"><i className="fab fa-instagram"></i></a>
              <a href="#" className="me-3"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-github"></i></a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Footer;
