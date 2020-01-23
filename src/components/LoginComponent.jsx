import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default function LoginComponent(props){
    const [show, setShow] = React.useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow}>
          Login
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <form onSubmit={props.handleSubmit} method="post">
            <div className="form-group">
              <label forhtml="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                 onChange={props.handleEmailInput}
              />
            </div>

            <div className="form-group">
              <label forhtml="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
             onChange={props.handlePasswordInput}
              />
            </div>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Login
            </Button>
            </form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
