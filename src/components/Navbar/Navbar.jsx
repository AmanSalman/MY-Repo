import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavBar() {
  const [activeLink, setactiveLink] = useState('home');
  const [scroll, setScroll] = useState(false);

  useEffect(()=>{
    const onscroll = ()=>{
      if(window.scrollY > 50){
        setScroll(true);
      } else {
        setScroll(false);
      }
    }
    window.addEventListener('scroll', onscroll);
    return ()=>{
      window.removeEventListener('scroll', onscroll);
    }

  },[])

  const UpdateActiveLink = (link) => {
    setactiveLink(link);
  }
  
  return (
    <Navbar expand="lg" className={scroll ? "scroll" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img alt="Logo" /> */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={()=>UpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={()=>UpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={()=>UpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icons">
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
              <a href="#"></a>
            </div>
            <button className="vvd" onClick={()=> console.log('connect')}> 
              Let's Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
