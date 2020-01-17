import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import store from "../store";


export default class Main extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <h1>Hola a todos</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt deleniti temporibus laborum quam quo autem reprehenderit esse vero officia. Provident commodi autem repudiandae recusandae totam aperiam velit quisquam sint voluptate.</p>
            </div>
        )
    }
}