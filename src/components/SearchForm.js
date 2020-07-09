import React from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBInputGroup, MDBInput, MDBRow, MDBCol } from 'mdbreact';

const SearchForm = props => {

    return(
        <>
        <MDBRow>
        <MDBCol>
            <MDBCard reverse>
            <MDBCardBody cascade className="text-center">

            <form>
            <MDBRow className="d-flex align-items-center mb-3">
            <MDBCol md="3" className="d-flex align-items-center mt-2">
                <span className="mr-2" id="basic-select">Team：</span>
                <select style={{borderRadius: "2px"}} className="browser-default custom-select" aria-describedby="basic-select">
                    <option value="0">Choose A Team</option>
                    <option value="1">One</option>
                </select>
            </MDBCol>
            <MDBCol md="3" className="d-flex align-items-center mt-2">
                <span className="mr-2" id="basic-addon">Keyword：</span>
                <input type="text" style={{borderRadius: "2px"}} className="form-control" placeholder="Type here" aria-describedby="basic-addon" />
            </MDBCol>
            </MDBRow>

            <MDBBtn className="px-3 py-2 mt-5">Search</MDBBtn>

            </form>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </MDBRow>
        </>
    )
}

export default SearchForm