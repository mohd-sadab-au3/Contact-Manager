import * as actionTypes from '../actions/actionTypes';


const onDeleteHandler = (state, action) => {

    return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
    }

}

const onAddHandler = (state, action) => {

    return {
        ...state,
        contacts: state.contacts.concat(action.details)

    }
}


const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.DELETE_CONTACT:
            return (onDeleteHandler(state, action))

        case actionTypes.ADD_CONTACT:
            return (onAddHandler(state, action))

        default:
            return state;

    }



}

export default reducer;