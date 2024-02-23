import React from 'react'
import { Container,Nav,Navbar } from 'react-bootstrap'



import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div> <Navbar bg="dark" data-bs-theme="dark" >
    <Container>
      <Navbar.Brand href="#home">Been Love Memory</Navbar.Brand>
      <Nav className="me-auto">
        <NavLink className={({isActive})=>isActive? "mx-2 text-decoration-none text-warning":"mx-2 text-decoration-none"} to="/">Home</NavLink>
        <NavLink  className={({isActive})=>isActive? "mx-2 text-decoration-none text-warning":"mx-2 text-decoration-none"} to="/add-blog">Add Blog</NavLink>
      </Nav>
    </Container>
  </Navbar> 
 </div>
  )
}

export default Header