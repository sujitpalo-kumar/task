import React, { Fragment, useState } from "react";
import { Button, Modal } from 'react-bootstrap';


const Modals = (props) => {
    const { name, email, number, password, confirm_password } = props.value

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (


        <Fragment>



            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div>
                        <div className="container mt-3">
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header">
                                            Details
                                        </div>
                                        <div className="card-body">
                                            <div>
                                            <h1>Name:{name}</h1>
                                            </div>
                                            <div>
                                            <h1>Email:{email}</h1>
                                            </div>
                                            <div>
                                            <h1>Number:{number}</h1>
                                            </div>
                                            <div>
                                            <h1>Password:{password}</h1>
                                            </div>
                                            <div>
                                            <h1>conform password:{confirm_password}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    

                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>


        </Fragment>
    )

}
export default Modals;