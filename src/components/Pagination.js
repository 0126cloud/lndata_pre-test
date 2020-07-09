import React, {useState} from "react"
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow } from "mdbreact";


const Pagination = props => {

    const {pagination, currentPage, setCurrentPage, handlePageClick} = props

    const [startSlice, setStartSlice] = useState(0)
    const [endSlice, setEndSlice] = useState(5)

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
                onClick={() => {
                    setCurrentPage(page)
                    if(page === endSlice && endSlice < 28) {
                        setStartSlice(page - 1)
                        setEndSlice(page + 4)
                    }else if(page - 1 === startSlice && startSlice > 3) {
                        setStartSlice(page - 5)
                        setEndSlice(page)
                    }
                    handlePageClick(page)
                    }}>
                <MDBPageNav value={page}>
                    {page}
                </MDBPageNav>
            </MDBPageItem>
        ))}
        <MDBPageItem disabled={endSlice >= 33 ? true : false} onClick={() => {
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