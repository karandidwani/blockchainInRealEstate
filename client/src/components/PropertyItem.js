import React from "react";
import {Link} from "react-router-dom";
import "../album.css"


const PropertyItem = ({   property,
                          currentUser,
                          key,
                          transactionHash,
                          description,
                          forSale,
                          SellingPrice,
                          measurement,
                          address,
                          addPropertyIdToState,
                          getSelectedProperty
                      }) => {

    return (
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-lg-4">
                <div className="card mb-4 shadow-sm">
                    <img className="card-img-top"
                         src={require("../images/house.jpeg")}
                         alt="Card image cap"
                    />
                    <div className="card-body">
                        <p className="card-text">{description}</p>
                        <p className="card-text">Address: {address.street}, {address.city}-{address.state},{address.country}</p>
                        <p className="card-text">Zip-Code{address.zip}</p>
                        <br/>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <Link to="/property" type="button" onClick={getSelectedProperty}
                                className="btn btn-sm btn-outline-secondary">View</Link>
                                {/*<button type="button" onClick={this.handleButtonClick} className="btn btn-sm btn-outline-secondary">View</button>*/}
                                <button type="button" className="btn btn-sm btn-outline-secondary">Favourite</button>
                            </div>
                            <Link to="/">
                                <small className="text-muted">Learn more..</small>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default (PropertyItem);