import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap'
import { connect } from 'react-redux'


function HomeComponent() {
    return (
        <Jumbotron>
            <h1>Hello, world!</h1>
            <p>
                This is a simple hero unit, a simple jumbotron-style component for calling
                extra attention to featured content or information.
            </p>
            <p>
                <Button variant="primary">Learn more</Button>
            </p>
        </Jumbotron>
    )
}

const mapStateToProps = state => { };

const mapDispatchToProps = dispatch => { }

export default connect(null, null)(HomeComponent);