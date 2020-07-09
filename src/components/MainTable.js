import React, { useState } from "react"
import { MDBTable, MDBTableHead, MDBIcon } from "mdbreact";
import TableBody from "./TableBody";



const MainTable = props => {

    const { players, handleSortDown, theadValue, setTheadValue } = props

    const [isSortDown, setIsSortDown] = useState(false)
    const [isTheadDown, setIsTheadDown] = useState([false,false,false,false,false,false])


    return(
        <>
        <div className="mainTable-box">
    <MDBTable bordered hover striped>
      <MDBTableHead>
        <tr>
          <th>PlayerName</th>
          <th>Team</th>
          <th>TeamName</th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(!isSortDown)
                setIsTheadDown([!false,false,false,false,false,false])
               }}>
              <div value="games_played" className="d-flex align-items-center">
                  Games {isTheadDown[0] ? <MDBIcon icon="sort-up" className="ml-2" /> : <MDBIcon icon="sort-down" className="ml-2" />}
              </div>
          </th>
          <th>MPG</th>
          <th>FGA</th>
          <th>FGM</th>
          <th>FG%</th>
          <th>FT%</th>
          <th>3PA</th>
          <th>3PM</th>
          <th>3PT%</th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(true)
                console.log(isTheadDown)
               }}>
              <div value="points_per_game" className="d-flex align-items-center">
                  Points {isTheadDown[1] ? <MDBIcon icon="sort-up" className="ml-2" /> : <MDBIcon icon="sort-down" className="ml-2" />}
              </div>
          </th>
          <th>ORebounds</th>
          <th>DRebounds</th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(true)
               }}>
              <div value="rebounds_per_game" className="d-flex align-items-center">
                  Rebounds {isTheadDown[2] ? <MDBIcon icon="sort-up" className="ml-2" /> : <MDBIcon icon="sort-down" className="ml-2" />}
              </div>
          </th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(true)
               }}>
              <div value="assists_per_game" className="d-flex align-items-center">
                  Assists {isTheadDown[3] ? <MDBIcon icon="sort-up" className="ml-2" /> : <MDBIcon icon="sort-down" className="ml-2" />}
              </div>
          </th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(true)
               }}>
              <div value="steals_per_game" className="d-flex align-items-center">
                  Steals {isTheadDown[4] ? <MDBIcon icon="sort-up" className="ml-2" /> : <MDBIcon icon="sort-down" className="ml-2" />}
              </div>
          </th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(true)
               }}>
              <div value="blocks_per_game" className="d-flex align-items-center">
                  Blocks {isTheadDown[5] ? <MDBIcon icon="sort-up" className="ml-2" /> : <MDBIcon icon="sort-down" className="ml-2" />}
              </div>
          </th>
          <th>Turnovers</th>
          <th>Efficiency</th>
          <th>Detail</th>
        </tr>
      </MDBTableHead>
      <TableBody 
        players={players}
        isSortDown={isSortDown}
        theadValue={theadValue} />
    </MDBTable>
    </div>
    </>
    )
}

export default MainTable