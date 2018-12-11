import React, {Component} from "react";
import {Link} from "react-router-dom";

class Property extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        var property = this.props.property.map(p => (p))
        const address = property[0].address
        const description = property[0].description
        const measurement = property[0].measurement
        const price = 1000000


        return (
            <div>
                <div className="container">
                    <div className="jumbotron">
                        <div className="row ">
                            <div className="col-md-4">
                                <img style={{width: "348px", height: "350px"}}
                                     src={require("../images/house.jpeg")}
                                     alt="Card image cap"
                                />
                            </div>
                            <div className="col-md-8" style={{paddingLeft: "60px"}}>
                                <h2 style={{textAlign: "center"}}>{description}</h2>
                                <hr/>
                                <br/>
                                <h4>Address:</h4>
                                <br/>
                                <h5 style={{color: "blue"}}>{address.street}, {address.city}, {(address.state)} - {address.zip}</h5>
                                <br/>
                                <h4>Selling Price: {price}</h4>
                                <br/>
                                <h4>Area : {measurement.breadth} x {measurement.length}</h4>
                                <br/>
                                <Link className="btn btn-primary"
                                      to={`/users/${this.props.currentUser.user.id}/messages/new`}>Contact Owner</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Property;