import React from 'react'
import {Link} from "react-router-dom";


const ProperValidation = ({currentUser}) => {
        return (
            <div className="container text-center">
                <h1>Thank you</h1>
                <hr/>
                <h3>We are validating your property...</h3>
                <h4>Once the property is verified you will receive and email from us. A verified property is then added to our website and is available for sale.</h4>
                <hr/>
                <br/>
                <br/>
                <h4>Why do we need to verify? What exactly is being verified?</h4>
                <h4>if you have similar questions, dont't worry check our FQA section for all this information</h4>
                <h3>We got you covered!!!</h3>
                <hr/>
                <div>
                    <h5>So, what are you planning to do today? Click on the buttons below to begin the journey</h5>
                    <p>
                        <Link to="/buy" className="btn btn-success my-2">Buying Properties</Link>
                        <Link to="/sell" className="btn btn-danger my-2">Selling Properties</Link>
                    </p>
                </div>
            </div>

        )

}

export default ProperValidation;