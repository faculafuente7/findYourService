import React from "react";
import { connect } from "react-redux";
import ServicesComponent from '../components/ServicesComponent'

class ServicesContainer extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ServicesComponent
            services={this.props.services}
             />
        )
    }
}

const mapStateToProps = (state) => ({
    services: state.services
});

const mapDispatchToProps = dispatch => {}

export default connect(mapStateToProps, null)(ServicesContainer)