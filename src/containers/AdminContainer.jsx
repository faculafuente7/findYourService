import React from 'react';
import Axios from 'axios'
import AdminComponent from '../components/AdminComponent';
import { connect } from 'react-redux';

class AdminContainer extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            services: []
        }

        this.onClickDelete = this.onClickDelete.bind(this)
    }

    componentDidMount(){
        Axios.get('/api/services')
        .then(res => {
            this.setState({
                services: res.data
            })
        })
    }

    onClickDelete(service){
    console.log(service)
    }

    render(){
        return(
            <AdminComponent
            services={this.state.services}
            onClickDelete={this.onClickDelete}
            />
        )
    }
}

const mapStateToProps = state => {}

const mapDispatchToProps = dispatch => {}

export default connect(null,null)(AdminContainer)