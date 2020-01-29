import React from 'react';
import { Card } from 'react-bootstrap'


function ServicesComponent({services}) {
    console.log(services)
    return (
        <div className="container">
            <div className="row" >
            {services &&
                services.map(service => (
                    <Card className="service-card col-lg-3 col-md-4 col-xs-6" style={{ width: '18rem' }}>
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
        </div>
    )
}

export default ServicesComponent;