import React, {useState} from "react"
import { MDBPagination, MDBPageItem, MDBPageNav } from "mdbreact";


const Pagination = props => {

    const {pagination, currentPage, setCurrentPage, 
        handlePageClick, handleSearchPage, isSearch, searchKey,
        searchTeam, startSlice, setStartSlice, endSlice, setEndSlice} = props


    return(
        <>
        <MDBPagination color="teal">

        <MDBPageItem disabled={endSlice <= 5 ? true : false} onClick={() => {
                    if(currentPage >= 5){
                        setStartSlice(currentPage - 5)
                        setEndSlice(currentPage)
                    } else {
                        setStartSlice(0)
                        setEndSlice(5)
                    }
                }}>
          <MDBPageNav>
            &laquo;
          </MDBPageNav>
        </MDBPageItem>
        {pagination.slice(startSlice, endSlice).map((page,index) => (
            <MDBPageItem key={index} active={currentPage === page ? true : false} 
                onMouseDown={()=> setCurrentPage(page)}            
                onClick={() => {
                    if(page === endSlice && endSlice < pagination.length - 3) {
                        setStartSlice(page - 1)
                        setEndSlice(page + 4)
                    }else if(page - 1 === startSlice && startSlice > 3) {
                        setStartSlice(page - 5)
                        setEndSlice(page)
                    }
                    {isSearch ? handleSearchPage(searchKey, searchTeam, page) : handlePageClick(page)}
                    }}>
                <MDBPageNav value={page}>
                    {page}
                </MDBPageNav>
            </MDBPageItem>
        ))}
        <MDBPageItem disabled={endSlice >= pagination.length ? true : false} onClick={() => {
                    if(currentPage > 1) {
                        setStartSlice(currentPage - 1)
                        setEndSlice(currentPage + 4)
                    }
                }}>
          <MDBPageNav>
            &raquo;
          </MDBPageNav>
        </MDBPageItem>

      </MDBPagination>
        </>
    )
}

export default Pagination