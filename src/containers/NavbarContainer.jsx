import React from 'react';
import { connect } from 'react-redux';
import { searchServices } from '../store/actions/services'
import { useDispatch } from "redux"
import NavbarComponent from '../components/NavbarComponent'


class NavbarContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
        return (
            <NavbarComponent
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
            />
        )

    }
}

const mapDispatchToProps = dispatch => ({
    searchServices: inputValue => dispatch(searchServices(inputValue))
})

export default connect(null, mapDispatchToProps)(NavbarContainer)

