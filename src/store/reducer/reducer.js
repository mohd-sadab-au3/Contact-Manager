import * as actionTypes from '../actions/actionTypes';


const onDeleteHandler = (state, action) => {

    return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.id)
    }

}


const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.DELETE_CONTACT:
            return (onDeleteHandler(state, action))


        default:
            return state;

    }



}

export default reducer;