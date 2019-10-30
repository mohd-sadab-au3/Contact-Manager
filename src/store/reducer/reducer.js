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

const onUpdateHandler = (state, action) => {

    let update = state;
    // console.log(action.details);
    update.contacts.forEach((res, index) => {
        if (res.id === action.details.id) {
            update.contacts[index] = action.details;
        }
    });
    return {
        ...update
    }
}



const reducer = (state, action) => {

    switch (action.type) {

        case actionTypes.DELETE_CONTACT:
            return (onDeleteHandler(state, action))

        case actionTypes.ADD_CONTACT:
            return (onAddHandler(state, action))

        case actionTypes.UPDATE_CONTACT:
            return (onUpdateHandler(state, action))



        default:
            return state;

    }



}

export default reducer;