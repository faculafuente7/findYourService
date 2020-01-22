import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios'
import { useDispatch } from "redux"
import HomeComponent from '../components/HomeComponent'


class HomeContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <HomeComponent />
        )

    }
}

export default connect(null,null)(HomeContainer)