import React from "react";
import { connect } from "react-redux";
import LoginComponent from "../components/LoginComponent"
import { fetchUser } from '../store/actions/users'
import Axios from "axios";


class LoginContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputEmail: "",
            inputPassword: ""
        }
        this.handleEmailInput = this.handleEmailInput.bind(this)
        this.handlePasswordInput = this.handlePasswordInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleEmailInput(evt) {
        const value = evt.target.value;
        this.setState({
            inputEmail: value
        });
    }

    handlePasswordInput(evt) {
        const value = evt.target.value;
        this.setState({
            inputPassword: value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        if (
            this.state.inputEmail &&
            this.state.inputPassword
        ) {
            Axios.post("/api/auth/register", this.state)
                .then(res => {
                    Axios.post('/api/auth/login', this.state)
                        .then(res => {
                           this.props.fetchUser(res.data)
                           this.props.history.push('/admin')
                        })
                })
        }
    }

    render() {
        return (
            <LoginComponent
                handleEmailInput={this.handleEmailInput}
                handlePasswordInput={this.handlePasswordInput}
                handleSubmit={this.handleSubmit}
            />
        )
    }
}

const mapStateToProps = (state) => { };

const mapDispatchToProps = dispatch => ({
    fetchUser: user => dispatch(fetchUser(user))
})

export default connect(null, mapDispatchToProps)(LoginContainer);