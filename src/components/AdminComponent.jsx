import React from 'react';
import { Table, Button } from 'react-bootstrap'

export default ({ services, onClickDelete }) => {
    return (
        <Table className="adminTable" striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Active</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody>
                {services.map(service => (
                    <tr>
                        <th>{service.id}</th>
                        <th>{service.title}</th>
                        <th>{service.description}</th>
                        <th>{service.active ? (
                            <p>Active</p>
                        ) : (
                                <p>Disable</p>
                            )}</th>
                        <th>
                            <Button ><i className="fas fa-edit" ></i></Button>
                            &nbsp;&nbsp;&nbsp;
                        <Button onClick={() => onClickDelete(service)} variant="danger"><i className="far fa-trash-alt"></i></Button>
                        </th>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}