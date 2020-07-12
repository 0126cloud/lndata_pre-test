import React, { useEffect, useState } from "react"
import { MDBContainer, MDBRow, MDBBtn } from "mdbreact";
import SearchForm from "../components/SearchForm"
import MainTable from "../components/MainTable"
import Pagination from "../components/Pagination"
import ChartModal from "../components/ChartModal"


const Main = props => {
    const [players, setPlayers] = useState([])
    const [pagination, setPagination] = useState([])
    const [currentPage, setCurrentPage] = useState(1)

    const [theadValue, setTheadValue] = useState("")
    const [isSortDown, setIsSortDown] = useState(false)

    const [totalTeam, setTotalTeam] = useState([])
    const [searchKey, setSearchKey] = useState("")
    const [searchTeam, setSearchTeam] = useState("")
    const [isSearch, setIsSearch] = useState(false)

    const [show, setShow] = useState(false)

    const [startSlice, setStartSlice] = useState(0)
    const [endSlice, setEndSlice] = useState(5)




    const setPageNav = (totalPages) => {

        let pagination = []

        for(let i=0; i < totalPages; i ++ ){
         pagination.push(i+1)
        
        }

        setPagination(pagination)

    }

    const countTotalTeam = (data) => {
          let teamNames = []
          let newTeamNames = []

          data.forEach(element => {
            teamNames.push({name: element.team_name, count: 1})
          });

          for (let i = 0; i < teamNames.length; i++) {
            const index = newTeamNames.findIndex(
              (value) => value.name === teamNames[i].name
            )
      
            if (index !== -1) {
              newTeamNames[index].count += teamNames[i].count
            } else {
              const newItem = { ...teamNames[i] }
              newTeamNames = [...newTeamNames, newItem]
            }
          }
      

         return newTeamNames
      };



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

      async function getAllData() {

        const request = new Request('http://localhost:3002/players', {
          method: 'GET',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'appliaction/json',
          }),
        })
    
        const response = await fetch(request)
        const data = await response.json()

        const totalTeam = countTotalTeam(data)
        setTotalTeam(totalTeam)
      }

      async function getSearchData(searchKey, searchTeam, page) {

        const request = new Request(`http://localhost:3002/players?team_name_like=${searchTeam}&name_like=${searchKey}&_sort=points_per_game&_order=desc&_page=${page}&_limit=15`, {
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
        getAllData()
      },[])


      const handlePageClick = async (currentPage) => {
        await setTheadValue("points_per_game")
        await setIsSortDown(false)
        await getPlayers(currentPage)
      }

      const handleSearch = async (searchKey, searchTeam) => {
        const page = 1
        const start = 0
        const end = 5
        setStartSlice(start)
        setEndSlice(end)
        setCurrentPage(page)
        await getSearchData(searchKey, searchTeam, 1)
        await setIsSearch(true)
      }

      const handleSearchPage = async (searchKey, searchTeam, currentPage) => {
        await getSearchData(searchKey, searchTeam, currentPage)
      }


    return(
        <>
        <MDBContainer className="py-5" >
        <SearchForm 
            totalTeam={totalTeam}
            searchKey={searchKey}
            setSearchKey={setSearchKey}
            handleSearch={handleSearch}
            setSearchTeam={setSearchTeam}
            searchTeam={searchTeam}
            setCurrentPage={setCurrentPage} />
        <MDBRow className="d-flex justify-content-end pr-2">
            <MDBBtn className="px-3 py-2 mt-4 mb-5" color="dark" onClick={()=> setShow(true)}>Show Charts</MDBBtn>
        </MDBRow>
        <ChartModal 
            setShow={setShow}
            show={show}
            totalTeam={totalTeam} />
        <MainTable
            players={players}
            currentPage={currentPage}
            setTheadValue={setTheadValue}
            theadValue={theadValue}
            isSortDown={isSortDown}
            setIsSortDown={setIsSortDown} />   
        <MDBRow className="d-flex justify-content-end pr-2 mt-3">
            <Pagination 
            pagination={pagination}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            startSlice={startSlice}
            endSlice={endSlice}
            setStartSlice={setStartSlice}
            setEndSlice={setEndSlice}
            handlePageClick={handlePageClick}
            isSearch={isSearch}
            searchKey={searchKey}
            searchTeam={searchTeam}
            handleSearchPage={handleSearchPage} />
        </MDBRow>
        </MDBContainer>
        </>
    )
}

export default Main