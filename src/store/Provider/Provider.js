import React, { Component } from 'react'
import reducer from '../reducer/reducer';
const Context = React.createContext();

export default class Provider extends Component {

    state = {

        contacts: [
            {
                id: 1,
                name: "Jhon Doe",
                email: "Jdoe@gmail.com",
                phone: "444-444-4444"
            }, {
                id: 2,
                name: "Sid",
                email: "Sid@gmail.com",
                phone: "455-444-4444"
            }, {
                id: 3,
                name: "Shahrukh",
                email: "srk@gmail.com",
                phone: "444-555-4444"
            },
        ],
        dispatch: action => this.setState(state => reducer(state, action))

    };

    render() {
        return (

            <Context.Provider value={this.state}>
                {this.props.children}

            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; 
