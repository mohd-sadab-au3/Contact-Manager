import React, { Component } from 'react'
import Contact from '../Contact/Contact';
import { Consumer } from '../../store/Provider/Provider';
import * as actionTypes from '../../store/actions/actionTypes';

class Contacts extends Component {



    deleteContactHandler = (id, dispatch) => {

        dispatch({ type: actionTypes.DELETE_CONTACT, id: id });
    }

    render() {



        return (
            <Consumer>
                {value => {
                    const { contacts } = value;
                    return (
                        <React.Fragment>
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