import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {

    state = {
        showDetails: false
    }

    showDetailsHandler = () => {

        this.setState((prevState) => {

            return {
                showDetails: !prevState.showDetails
            }
        })
    }


    render() {
        const { name, email, phone, id } = this.props.contact;
        let details = null;
        if (this.state.showDetails) {
            details = (<ul className="list-group">
                <li className="list-group-item">{email}</li>
                <li className="list-group-item">{phone}</li>
            </ul>);
        }
        return (
            <div className="card card-body mb-3" >
                <h4>
                    {name}
                    <i className="fas fa-sort-down"
                        onClick={this.showDetailsHandler}
                        style={{ cursor: 'pointer' }}
                    />

                    <i className="fas fa-trash-alt mr-2"
                        style={{ cursor: 'pointer', float: 'right', color: 'red', fontSize: '14px' }}
                        onClick={() => this.props.delete(id)} />
                </h4>
                {details}
            </div>
        )
    }
}

Contact.propTypes = {

    contact: PropTypes.object.isRequired,
}
export default Contact;