import {
    ADD_PROPERTY_ID,
    CREATE_NEW_PROPERTY,
    LOAD_PROPERTIES,
    LOAD_SELECTED_PROPERTIES,
    REMOVE_PROPERTY
} from "../actionTypes";

const property = (state = [], action) => {
    console.log("in property reducer action ", action)
    console.log("in property reducer state ", state)
    switch (action.type) {
        case CREATE_NEW_PROPERTY:
            return {
                property: action.property
            };
        case LOAD_PROPERTIES:
            console.log("returning action.properties", action.properties)
            return action.property;
        case LOAD_SELECTED_PROPERTIES:
            console.log("returning action.properties", action.property)
            return action.property;
        case ADD_PROPERTY_ID:
            return {
                ...state,
                propertyId: action.propertyId
            }
        case REMOVE_PROPERTY:
            return state.filter(property => property._id !== action.id);
        default:
            return state;
    }
};

export default property;