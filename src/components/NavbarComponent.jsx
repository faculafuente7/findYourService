import React from 'react'
import {Navbar, Nav, Form, FormControl, Button, NavDropdown} from 'react-bootstrap'



function  NavbarComponent({handleInput, handleSubmit}){
    return (
        <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Find Your Service</Navbar.Brand>
        <Form onSubmit={handleSubmit} inline>
          <FormControl onChange={handleInput} type="text" placeholder="Search" className="mr-sm-2" />
          <Button onClick={handleSubmit} variant="outline-info">Search</Button>
        </Form>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Login</Nav.Link>
        </Nav>
      </Navbar>
    )
}

export default NavbarComponent;