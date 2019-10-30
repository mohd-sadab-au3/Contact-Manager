import React, { Component } from 'react'
import Input from '../../../components/Input/Input';
import { Consumer } from '../../../store/Provider/Provider';
import * as actionTypes from '../../../store/actions/actionTypes';
import axios from 'axios';
class EditContact extends Component {

    state = {

        name: '',
        email: '',
        phone: '',
        errors: {}
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        console.log("contact", contact);
        this.setState({
            name: contact.name,
            email: contact.email,
            phone: contact.phone
        })

    }

    inputChangeHandler = (event) => {

        event.persist()
        this.setState(prevState => {
            return {
                ...prevState,
                [event.target.name]: event.target.value,
            }
        })

    }

    formSubmitHandler = (dispatch, event) => {

        event.preventDefault();
        const { name, email, phone } = this.state;
        const { id } = this.props.match.params;
        const details = {
            ...this.state
        }

        if (name === '') {
            this.setState({ errors: { name: "Name is Required" } });
            return;
        }

        if (email === '') {
            this.setState({ errors: { email: "Email is Required" } });
            return;
        }

        if (phone === '') {
            this.setState({ errors: { phone: "Phone is Required" } });
            return;
        }

        axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, details)
            .then(res => dispatch({ type: actionTypes.UPDATE_CONTACT, details: res.data }));


        this.setState({
            name: '',
            email: '',
            phone: '',
            id: '',
            errors: {}
        })

        this.props.history.push("/");

    }

    render() {
        const { name, email, phone, errors } = this.state;
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (<div className="card mb-3">
                        <div className="card-header">Edit Contact</div>
                        <div className="card-body">
                            <form onSubmit={(event) => this.formSubmitHandler(dispatch, event)}>

                                <Input type="text" name="name" label="Name"
                                    value={name} placeholder="Enter Name.."
                                    inputValue={(event) => this.inputChangeHandler(event)}
                                    error={errors.name} />

                                <Input type="email" name="email" label="Email"
                                    value={email} placeholder="Enter Email.."
                                    inputValue={(event) => this.inputChangeHandler(event)}
                                    error={errors.email} />

                                <Input type="text" name="phone" label="Phone"
                                    value={phone} placeholder="Enter Phone.."
                                    inputValue={(event) => this.inputChangeHandler(event)}
                                    error={errors.phone} />

                                <button className="btn btn-block btn-light">Edit Contact</button>
                            </form>
                        </div>
                    </div>)
                }
                }
            </Consumer>

        )
    }
}

export default EditContact;