import React, { useEffect, useState } from "react"
import { MDBContainer, MDBRow, MDBBtn, MDBDataTable } from "mdbreact";
import SearchForm from "../components/SearchForm"
import MainTable from "../components/MainTable"
import Pagination from "../components/Pagination"



const Main = props => {
    const [players, setPlayers] = useState([])
    const [pagination, setPagination] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [theadValue, setTheadValue] = useState("")

    const setPageNav = (totalPages) => {

        let pagination = []

        for(let i=0; i < totalPages; i ++ ){
         pagination.push(i+1)
        
        }

        setPagination(pagination)

    }


    async function getPlayers(page) {

        const request = new Request(`http://localhost:3002/players?_sort=points_per_game&_order=desc&_page=${page}&_limit=15`, {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'appliaction/json',
          }),
        })
    
        const response = await fetch(request)
        const data = await response.json()
        const count = await response.headers.get('x-total-count')
        const totalPages = Math.ceil(count / 15)

        setPlayers(data)
        setPageNav(totalPages)
      }

      useEffect(()=>{
        getPlayers(currentPage)

      },[])

      async function getSortDownData(theadValue) {
          let value = theadValue
          let newSort = players.sort(function(a,b) {
              return a[value] - b[value]
          })
          await setPlayers(newSort)
          console.log(newSort)
      }


      const handlePageClick = async (currentPage) => {
        await getPlayers(currentPage)
      }

      const handleSortDown = async (theadValue) => {
        await getSortDownData(theadValue)
      }



    return(
        <>
        <MDBContainer className="py-5" >
        <SearchForm />
        <MDBRow className="d-flex justify-content-end pr-2">
                <MDBBtn className="px-3 py-2 mt-4 mb-5" color="dark">Show Charts</MDBBtn>
        </MDBRow>
        <MainTable
            players={players}
            handleSortDown={handleSortDown}
            currentPage={currentPage}
            setTheadValue={setTheadValue}
            theadValue={theadValue} />   
        <MDBRow className="d-flex justify-content-end pr-2 mt-3">
            <Pagination 
            pagination={pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            handlePageClick={handlePageClick} />
        </MDBRow>
        </MDBContainer>
        </>
    )
}

export default Main