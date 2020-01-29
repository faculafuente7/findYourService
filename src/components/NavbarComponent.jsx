import React from 'react'
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import LoginContainer from '../containers/LoginContainer'



function NavbarComponent({ handleInput, handleSubmit, logout, history, user }) {
  console.log(user)
  return (
    <Navbar bg="dark" variant="dark">
      <Link to="/" >
        <Navbar.Brand href="#home">Find Your Service</Navbar.Brand>
      </Link>
      <Form onSubmit={handleSubmit} inline>
        <FormControl onChange={handleInput} type="text" placeholder="Search" className="mr-sm-2" />
        <Button onClick={handleSubmit} variant="outline-info">Search</Button>
      </Form>
      {user.inputEmail || user.email ? (
        <Nav>
          <Button onClick={logout} variant="dark" >Logout</Button>
          <Link className="navbar-brand" to="/admin">{user.inputEmail || user.email }</Link>
        </Nav>
      ) : (
          <Nav className="mr-auto">
            <LoginContainer history={history} />
          </Nav>
        )}
    </Navbar>
  )
}

export default NavbarComponent;