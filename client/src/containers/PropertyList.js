import React, {Component} from "react";
import {connect} from "react-redux";
import {fetchProperties, getSelectedProperty, addPropertyIdToState} from "../store/actions/property";
import PropertyItem from "../components/PropertyItem"

class PropertyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            street: "",
            city: "",
            state: "",
            zip: ""
        }

        this.handleChange = this.handleChange.bind(this);
    }

     componentWillMount() {
        console.log("in propertyList componentDidMount, this.props", this.props);
        this.props.fetchProperties();
        console.log("done fetching properties");

        // setTimeout(() => {
        //     this.setState({...this.state})
        //     console.log("re-rendered")
        // }, 3000)
    }

    handleChange(e) {

    }

    render() {
        console.log("In propertyList render ", this.props)
        const {property, currentUser, getSelectedProperty, addPropertyIdToState} = this.props;
        console.log("property propertyList",property)
        const {street, state, zip, city} = this.state;
        let propertiesList = property.map(p => (
            <PropertyItem
                key={p._id}
                transactionHash={p.transactionHash}
                description={p.description}
                forSale={p.forSale}
                SellingPrice={p.SellingPrice}
                measurement={p.measurement}
                address={p.address}
                currentUser={currentUser}
                addPropertyIdToState = {addPropertyIdToState.bind(this, p._id)}
                getSelectedProperty={ getSelectedProperty.bind(this, p._id)}
            />
        ));

        return (
            <div>
                <div className="container">
                    <form className="search-form" onSubmit={() => {
                    }}>
                        <div className="row">
                            <div className="col">
                                <label htmlFor="street">Street</label>
                                <input
                                    autoComplete="off"
                                    className="form-control"
                                    id="street"
                                    name="street"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={street}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="city">City</label>
                                <input
                                    autoComplete="off"
                                    className="form-control"
                                    id="city"
                                    name="city"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={city}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="state">State</label>
                                <input
                                    autoComplete="off"
                                    className="form-control"
                                    id="state"
                                    name="state"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={state}
                                />
                            </div>
                            <div className="col">
                                <label htmlFor="zip">Zip Code</label>
                                <input
                                    autoComplete="off"
                                    className="form-control"
                                    id="zip"
                                    name="zip"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={zip}
                                />
                            </div>
                            <div className="col">
                                <br/>
                                <button type="submit" className="btn btn-success search-btn"
                                        style={{}}>
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="album py-5 bg-light">
                    <div className="container">
                            <div className="col-md-4"></div>
                            {propertiesList}
                    </div>
                </div>
            </div>
        )
    }
}


function mapStateToProps(state) {
    console.log("in propertylist.js mapStateToProps", state)
    return {
        property: state.property,
        currentUser: state.currentUser.user.id
    };
}

export default connect(mapStateToProps, {fetchProperties, getSelectedProperty, addPropertyIdToState})(
    PropertyList
);