import React, { Component } from 'react'
import reducer from '../reducer/reducer';
import axios from 'axios';


const Context = React.createContext();

export default class Provider extends Component {

    state = {

        contacts: [],
        dispatch: action => this.setState(state => reducer(state, action))

    };

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => this.setState({
                ...this.state,
                contacts: res.data
            }))
    }

    render() {
        return (

            <Context.Provider value={this.state}>
                {this.props.children}

            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer; 
