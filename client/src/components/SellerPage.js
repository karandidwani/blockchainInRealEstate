import React, {Component} from "react";

class SellerPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owner: "",
            transactionHash: "",
            description: "",
            forSale: true,
            SellingPrice: "",
            measurement: {
                length: "",
                breadth: ""
            },
            address: {
                street: "",
                city: "",
                state: "",
                country: "",
                zip: ""
            }
        };
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log((this.props.currentUser.user.id))
        console.log(this.state)
        this.setState({owner: this.props.currentUser.user.id})
        this.props
            .onCreate(this.state)
            .then(() => {
                this.props.history.push("/propertyValidationPending");
            })
            .catch(() => {
                return;
            });
    };

    handleChange = e => {
        if ([e.target.name] == "length" || [e.target.name] == "breadth") {
            let measurement = {...this.state.measurement, [e.target.name]: e.target.value}
            this.setState({measurement});
        } else if ([e.target.name] == "street" || [e.target.name] == "city" || [e.target.name] == "state" || [e.target.name] == "country" || [e.target.name] == "zip") {
            let address = {...this.state.address, [e.target.name]: e.target.value}
            this.setState({address});
        }
        else if (e.target.type === 'checkbox') {
            this.setState({[e.target.name]: e.target.checked});
        } else {

            if (this.state.owner == "") {
                console.log((this.props.currentUser.user.id))
                console.log(this.state)
                this.setState({owner: this.props.currentUser.user.id})
            }
            this.setState({[e.target.name]: e.target.value});
        }
    };

    render() {
        const {owner, transactionHash, description, forSale, SellingPrice, measurement, address} = this.state;
        const {length, breadth} = measurement
        const {street, city, state, country, zip} = address
        const {
            errors,
            history,
            removeError
        } = this.props;
        history.listen(() => {
            removeError();
        });

        return (
            <div>
                <div className="row justify-content-md-center text-center">
                    <div className="col-md-12">
                        <div className="jumbotron form-class">
                            <form onSubmit={this.handleSubmit}>
                                <h2>Fill in the Property details</h2>
                                {errors.message && (
                                    <div className="alert alert-danger">{errors.message}</div>
                                )}

                                <div className="row">
                                    <div className="col col-form">
                                        <label htmlFor="transactionHash">Last transaction hash</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="transactionHash"
                                            name="transactionHash"
                                            onChange={this.handleChange}
                                            type="text"
                                            value={transactionHash}
                                        />
                                        <label htmlFor="description">Description</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="description"
                                            name="description"
                                            onChange={this.handleChange}
                                            type="text"
                                            value={description}
                                        />
                                        <label htmlFor="forSale">Available For Sale?</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="forSale"
                                            name="forSale"
                                            onChange={this.handleChange}
                                            type="checkbox"
                                            checked={forSale}
                                        />
                                        <label htmlFor="SellingPrice">SellingPrice</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="SellingPrice"
                                            name="SellingPrice"
                                            onChange={this.handleChange}
                                            type="number"
                                            value={SellingPrice}
                                        />
                                    </div>
                                    <div className="col col-form"><label>Address</label>
                                        <br/>
                                        <div className="row">
                                            <div className="col"><label htmlFor="street">Street</label>
                                                <input
                                                    autoComplete="off"
                                                    className="form-control"
                                                    id="street"
                                                    name="street"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    value={street}
                                                /></div>
                                            <div className="col"><label htmlFor="city">City</label>
                                                <input
                                                    autoComplete="off"
                                                    className="form-control"
                                                    id="city"
                                                    name="city"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    value={city}
                                                /></div>
                                        </div>
                                        <div className="row">
                                            <div className="col"><label htmlFor="state">state</label>
                                                <input
                                                    autoComplete="off"
                                                    className="form-control"
                                                    id="state"
                                                    name="state"
                                                    onChange={this.handleChange}
                                                    type="text"
                                                    value={state}
                                                /></div>
                                            <div className="col"><label htmlFor="zip">Zip Code</label>
                                                <input
                                                    autoComplete="off"
                                                    className="form-control"
                                                    id="zip"
                                                    name="zip"
                                                    onChange={this.handleChange}
                                                    type="Number"
                                                    value={zip}
                                                /></div>
                                        </div>
                                        <label htmlFor="country">Country</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="country"
                                            name="country"
                                            onChange={this.handleChange}
                                            type="text"
                                            value={country}
                                        />
                                    </div>
                                </div>

                                <br/>
                                <hr/>
                                <label>Measurement</label>
                                <br/>
                                <div className="row col-form">
                                    <div className="col ">
                                        <label htmlFor="length">Length</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="length"
                                            name="length"
                                            onChange={this.handleChange}
                                            type="number"
                                            value={length}
                                        />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="breadth">Breadth</label>
                                        <input
                                            autoComplete="off"
                                            className="form-control"
                                            id="breadth"
                                            name="breadth"
                                            onChange={this.handleChange}
                                            type="number"
                                            value={breadth}
                                        /></div>
                                </div>
                                <br/>
                                <hr/>
                                <br/>
                                <div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary btn-lg"> Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SellerPage;