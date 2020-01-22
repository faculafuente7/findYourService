import React from 'react';
import { Card } from 'react-bootstrap'


function ServicesComponent({services}) {
    console.log(services)
    return (
        <div>
            {services &&
                services.map(service => (
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Card.Title>{service.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                {service.description}
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    )
}

export default ServicesComponent;