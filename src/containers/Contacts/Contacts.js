import React, { Component } from 'react'
import Contact from '../Contact/Contact';
import { Consumer } from '../../store/Provider/Provider';
import * as actionTypes from '../../store/actions/actionTypes';
import axios from 'axios';

class Contacts extends Component {



    deleteContactHandler = (id, dispatch) => {

        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => dispatch({ type: actionTypes.DELETE_CONTACT, id: id }));

    }

    render() {



        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
                            <h1 className="display-5 mb-2"><span className="text-danger">Contact  </span>List</h1>
                            {
                                contacts.map(contact => (
                                    <Contact key={contact.id} contact={contact} delete={this.deleteContactHandler.bind(this, contact.id, value.dispatch)} />
                                ))
                            }
                        </React.Fragment>
                    )

                }}
            </Consumer>
        )
    }
}

export default Contacts;