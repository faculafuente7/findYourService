import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import store from "../store";
import NavbarContainer from "./NavbarContainer";
import HomeContainer from "./HomeContainer"
import ServicesContainer from "./ServicesContainer"
import { getUser } from "../store/actions/users"
import AdminContainer from "./AdminContainer";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("ESTO ESTA PASANDO")
        store.dispatch(getUser())
    }

    render() {
        return (
            <div>
                <NavbarContainer history={this.props.history} />
                <Switch>
                    <Route exact path="/"
                        component={HomeContainer}
                    />
                    <Route exact path="/search"
                        component={ServicesContainer}
                    />
                    <Route exact path="/admin"
                        component={AdminContainer}
                    />
                </Switch>
            </div>
        )
    }
}