import React, {useEffect, useState} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { withRouter } from "react-router-dom";



const Detail = props => {

    const { history } = props

    const [memberData, setMemberData] = useState([])

    async function getMemberData() {
      const name = history.location.pathname.substr(8) 
      const request = new Request(`http://localhost:3002/players?name_like=${name}`, {
        method: 'GET',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'appliaction/json',
        }),
      })
  
      const response = await fetch(request)
      const data = await response.json()
  
      setMemberData(data)
    }
    
    useEffect(()=>{
        getMemberData()
    },[])

    return (
        <>
        <MDBContainer className="py-5" style={{fontWeight: "400"}}>
            {memberData.map((value, index) => (
                <div key={index}>
                <MDBRow className="w-50">
                    <MDBCol>
                        <h5 style={{fontWeight: "600"}}>{value.name}</h5>
                        Team：{value.team_acronym}<br/>
                        TeamName：{value.team_name}<br/>
                        Games：{value.games_played}<br/>
                        MPG：{value.minutes_per_game}<br/>
                        FGA：{value.field_goals_attempted_per_game}<br/>
                        FGM：{value.field_goals_made_per_game}<br/>
                        FG%：{value.field_goal_percentage}<br/>
                        FT%：{value.free_throw_percentage}<br/>
                        3PA：{value.three_point_attempted_per_game}<br/>
                        3PM：{value.three_point_made_per_game}
                    </MDBCol>
                    <MDBCol className="pt-4">
                        3PT%：{value.three_point_percentage}<br/>
                        Points：{value.points_per_game}<br/>
                        ORebounds：{value.offensive_rebounds_per_game}<br/>
                        DRebounds：{value.defensive_rebounds_per_game}<br/>
                        Rebounds：{value.rebounds_per_game}<br/>
                        Assists：{value.assists_per_game}<br/>
                        Steals：{value.steals_per_game}<br/>
                        Blocks：{value.blocks_per_game}<br/>
                        Turnovers：{value.turnovers_per_game}<br/>
                        Efficiency：{value.player_efficiency_rating}
                    </MDBCol>
                </MDBRow>
          </div>
            ))}
        </MDBContainer>
        </>
    )
}


export default withRouter(Detail) 