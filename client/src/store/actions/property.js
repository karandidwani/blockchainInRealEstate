import {apiCall} from "../../services/api";
import {addError, removeError} from "./errors";
import {CREATE_NEW_PROPERTY, LOAD_PROPERTIES, LOAD_SELECTED_PROPERTIES, ADD_PROPERTY_ID} from "../actionTypes";
import {loadMessages, remove} from "./messages";

export const loadProperties = (property) => ({
    type: LOAD_PROPERTIES,
    property
});

export const addPropertyIdAction = (propertyId) => ({
    type: ADD_PROPERTY_ID,
    propertyId
})

export const loadSelectedProperty = (property) => {
    console.log("property.js 17",property)
     return {
            type: LOAD_SELECTED_PROPERTIES,
            property
        }
};

export function createPropertyAction(property) {
    return {
        type: CREATE_NEW_PROPERTY,
        property
    };
}


export function createProperty(data) {

    return dispatch => {
        return new Promise((resolve, reject) => {
            return apiCall("post", `/api/users/${data.owner}/properties/create`, data)
                .then(({...property}) => {
                    dispatch(createPropertyAction(property));
                    dispatch(removeError());
                    resolve(); // indicate that the API call succeeded
                })
                .catch(err => {
                    dispatch(addError(err.message));
                    reject(); // indicate the API call failed
                });
        })
    }
}

export const getSelectedProperty = (property_id) => {
    return dispatch => {
        return apiCall("GET", `/api/properties/${property_id}/get`)
            .then((res) => dispatch(loadSelectedProperty(res)))
            .catch(err => {
                addError(err.message);
            });
    };
};


// export const getSelectedProperty = (data) => {
//     console.log("getSelectedProperty is called now", data)
//
//
//
//     // return dispatch => {
//     //     return apiCall("GET", `/api/properties/${data}/get`)
//     //         .then(res => {
//     //             console.log("getSelectedProperty response", res)
//     //             return res;
//     //             // dispatch(loadSelectedProperty(res));
//     //         }).then(data =>{
//     //             console.log(data);
//     //
//     //         })
//     //         .catch(err => {
//     //             console.log(err)
//     //         });
//     // };
// }

export const addPropertyIdToState = (property_id) => {
    console.log("addPropertyIdToState, data ", property_id)
    return dispatch => {
        dispatch(addPropertyIdAction(property_id))
    }

}

export const fetchProperties = () => {
    console.log("fetchProperties is called now")
    return dispatch => {
        return apiCall("GET", "/api/properties/")
            .then(res => {
                console.log("fetchProperties response", res)
                dispatch(loadProperties(res));
            })
            .catch(err => {
                dispatch(addError(err.message));
            });
    };
};