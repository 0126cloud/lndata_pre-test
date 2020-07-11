import React from "react"
import { MDBBtn, MDBCard, MDBCardBody, MDBRow, MDBCol } from 'mdbreact';

const SearchForm = props => {

    const { totalTeam, searchKey, setSearchKey, handleSearch, setSearchTeam, searchTeam } = props

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
                <select style={{borderRadius: "2px"}} className="browser-default custom-select" 
                        aria-describedby="basic-select" onChange={(event) => setSearchTeam(event.target.value)}>
                    <option value={""}>Search All Team</option>
                    {totalTeam.map((value, index) => (
                       <option key={index} value={value.name}>{value.name}</option>
                    ))} 
                </select>
            </MDBCol>
            <MDBCol md="3" className="d-flex align-items-center mt-2">
                <span className="mr-2" id="basic-addon">Keyword：</span>
                <input type="text" style={{borderRadius: "2px"}} 
                       className="form-control" placeholder="Type here" value={searchKey} 
                       aria-describedby="basic-addon" onChange={(event) => setSearchKey(event.target.value)} />
            </MDBCol>
            </MDBRow>

            <MDBBtn className="px-3 py-2 mt-5" onClick={()=> handleSearch(searchKey, searchTeam)}>Search</MDBBtn>

            </form>
            </MDBCardBody>
            </MDBCard>
        </MDBCol>
        </MDBRow>
        </>
    )
}

export default SearchForm