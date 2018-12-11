import React from "react";
import PropertyList from "../containers/PropertyList";
import UserAside from "./UserAside";

const PropertyTimeline = props => {
    console.log("In property timeline ",props)
    return (
        <div className="row">
            {/*<UserAside*/}
                {/*profileImageUrl={props.profileImageUrl}*/}
                {/*username={props.username}*/}
            {/*/>*/}
            <div className="col">
                <PropertyList />
            </div>

        </div>
    );
};
export default PropertyTimeline;
