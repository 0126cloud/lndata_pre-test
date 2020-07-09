import React from "react"
import { MDBNavbar, MDBNavLink } from "mdbreact";
import { NavLink } from 'react-router-dom';



const TheMenu = props => {

    return(
        <>
        <MDBNavbar color="default-color" dark expand="md">
            <MDBNavLink as={NavLink} to="/" className="white-text pt-0 pb-0">
                Player Lists
            </MDBNavLink>
        </MDBNavbar>

        </>
    )
}

export default TheMenu