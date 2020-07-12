import React from "react"
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBIcon } from "mdbreact";
import { NavLink } from 'react-router-dom';
    


const TheHeader = props => {

    return(
        <>
            <MDBNavbar dark expand="md">
            <MDBNavbarBrand className="">
                <MDBNavLink as={NavLink} to="/" className="p-0">
                    <h3 style={{color: "#2bbbad", fontWeight: "600"}}>LOGO</h3>
                    {/* <img src="https://www.lndata.com/images/logo/logo_160.png" alt="LOGO" height="30px" /> */}
                </MDBNavLink>
            </MDBNavbarBrand>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBIcon icon="user" size="lg" />
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBNavbar>
        </>
    )
}

export default TheHeader