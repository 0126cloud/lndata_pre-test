import React from "react"
import { MDBTable, MDBTableHead, MDBIcon } from "mdbreact";
import TableBody from "./TableBody";



const MainTable = props => {

    const { players, theadValue, setTheadValue, isSortDown, setIsSortDown } = props


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
               }}>
              <div value="games_played" className="d-flex align-items-center">
                  Games <MDBIcon icon="sort" className="ml-2" />
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
                setIsSortDown(!isSortDown)
               }}>
              <div value="points_per_game" className="d-flex align-items-center">
                  Points <MDBIcon icon="sort" className="ml-2" />
              </div>
          </th>
          <th>ORebounds</th>
          <th>DRebounds</th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(!isSortDown)
               }}>
              <div value="rebounds_per_game" className="d-flex align-items-center">
                  Rebounds <MDBIcon icon="sort" className="ml-2" />
              </div>
          </th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(!isSortDown)
               }}>
              <div value="assists_per_game" className="d-flex align-items-center">
                  Assists <MDBIcon icon="sort" className="ml-2" />
              </div>
          </th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(!isSortDown)
               }}>
              <div value="steals_per_game" className="d-flex align-items-center">
                  Steals <MDBIcon icon="sort" className="ml-2" />
              </div>
          </th>
          <th className="sort-down-hover" onClick={(event) => {
                let value = event.target.getAttribute("value")        
                setTheadValue(value)
                setIsSortDown(!isSortDown)
               }}>
              <div value="blocks_per_game" className="d-flex align-items-center">
                  Blocks <MDBIcon icon="sort" className="ml-2" />
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