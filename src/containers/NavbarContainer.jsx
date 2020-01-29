import React from 'react';
import { connect } from 'react-redux';
import { searchServices } from '../store/actions/services'
import NavbarComponent from '../components/NavbarComponent'
import { logoutUser } from '../store/actions/users'
import Axios from "axios";



class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.logout = this.logout.bind(this)
    }

    handleInput(evt) {
        const value = evt.target.value;
        this.setState({ inputValue: value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.searchServices(this.state.inputValue);
        this.props.history.push('/search');
    }

    logout() {
        Axios.get('/api/auth/logout')
            .then(() => {
                this.props.logoutUser()
                this.props.history.push('/')
            })

    }

    render() {
        return (
            <NavbarComponent
                user={this.props.user}
                history={this.props.history}
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                logout={this.logout}
            />
        )

    }
}

const mapStateToProps = state => ({
    user: state.user
})

const mapDispatchToProps = dispatch => ({
    searchServices: inputValue => dispatch(searchServices(inputValue)),
    logoutUser: () => dispatch(logoutUser())
})

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer)

