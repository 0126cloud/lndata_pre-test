import React from "react"
import {MDBTableBody, MDBIcon } from "mdbreact";



const TableBody = props => {

    const { players, theadValue, isSortDown } = props

    return(
        <>
      <MDBTableBody>
          {!isSortDown ? (
              <>
        {players.map((value, index) => (
        <tr key={index}>
          <td>{value.name}</td>
          <td>{value.team_acronym}</td>
          <td>{value.team_name}</td>
          <td className="text-right">{value.games_played}</td>
          <td className="text-right">{value.minutes_per_game}</td>
          <td className="text-right">{value.field_goals_attempted_per_game}</td>
          <td className="text-right">{value.field_goals_made_per_game}</td>
          <td className="text-right">{value.field_goal_percentage}</td>
          <td className="text-right">{value.free_throw_percentage}</td>
          <td className="text-right">{value.three_point_attempted_per_game}</td>
          <td className="text-right">{value.three_point_made_per_game}</td>
          <td className="text-right">{value.three_point_percentage}</td>
          <td className="text-right">{value.points_per_game}</td>
          <td className="text-right">{value.offensive_rebounds_per_game}</td>
          <td className="text-right">{value.defensive_rebounds_per_game}</td>
          <td className="text-right">{value.rebounds_per_game}</td>
          <td className="text-right">{value.assists_per_game}</td>
          <td className="text-right">{value.steals_per_game}</td>
          <td className="text-right">{value.blocks_per_game}</td>
          <td className="text-right">{value.turnovers_per_game}</td>
          <td className="text-right">{value.player_efficiency_rating}</td>
          <td className="text-center"><MDBIcon icon="search" /></td>
        </tr> 
            ))}  
        </>) : (<>
        {players.sort(function(a,b) {
            return a[theadValue] - b[theadValue]
        }).map((value, index) => (
            <tr key={index}>
          <td>{value.name}</td>
          <td>{value.team_acronym}</td>
          <td>{value.team_name}</td>
          <td className="text-right">{value.games_played}</td>
          <td className="text-right">{value.minutes_per_game}</td>
          <td className="text-right">{value.field_goals_attempted_per_game}</td>
          <td className="text-right">{value.field_goals_made_per_game}</td>
          <td className="text-right">{value.field_goal_percentage}</td>
          <td className="text-right">{value.free_throw_percentage}</td>
          <td className="text-right">{value.three_point_attempted_per_game}</td>
          <td className="text-right">{value.three_point_made_per_game}</td>
          <td className="text-right">{value.three_point_percentage}</td>
          <td className="text-right">{value.points_per_game}</td>
          <td className="text-right">{value.offensive_rebounds_per_game}</td>
          <td className="text-right">{value.defensive_rebounds_per_game}</td>
          <td className="text-right">{value.rebounds_per_game}</td>
          <td className="text-right">{value.assists_per_game}</td>
          <td className="text-right">{value.steals_per_game}</td>
          <td className="text-right">{value.blocks_per_game}</td>
          <td className="text-right">{value.turnovers_per_game}</td>
          <td className="text-right">{value.player_efficiency_rating}</td>
          <td className="text-center"><MDBIcon icon="search" /></td>
        </tr> 
        ))}
        </>
        )}
      </MDBTableBody>
    </>
    )
}

export default TableBody