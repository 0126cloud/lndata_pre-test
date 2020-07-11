import React, { useState, useEffect } from "react"
import { Pie } from "react-chartjs-2"
import { MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBIcon } from 'mdbreact';


const ChartModal = props => {

    const {setShow, show, totalTeam} = props
    const [chartData, setChartData] = useState("")

    const chart = () => {
        const teamFilter = totalTeam.filter(element => element.count <= 15)
        let teamName = [];
        let teamCount = [];

        for (const dataObj of teamFilter) {
            teamName.push(dataObj.name);
            teamCount.push(dataObj.count);
        }

        setChartData({
              labels: teamName,
              datasets: [
                {
                  data: teamCount,
                  backgroundColor: [
                    "#F7464A",
                    "#46BFBD",
                    "#FDB45C",
                    "#949FB1",
                    "#4D5360",
                    "#AC64AD"
                  ],
                  hoverBackgroundColor: [
                    "#FF5A5E",
                    "#5AD3D1",
                    "#FFC870",
                    "#A8B3C5",
                    "#616774",
                    "#DA92DB"
                  ]
                }
            ]
          });
      };

    useEffect(()=>{ 
        chart()
    },[totalTeam])

    return(
        <>
        <MDBContainer>
            <MDBModal isOpen={show} centered>
            <MDBModalHeader className="w-100" style={{border: "none"}}>
                Teams which number of members less than or equal 15
                <MDBIcon onClick={()=> setShow(false)} icon="times" className="mr-2" />
            </MDBModalHeader>
            <MDBModalBody style={{border: "none", padding: "20px 10px 30px 10px"}}>
                <Pie data={chartData} options={{ responsive: true }} /> 
            </MDBModalBody>
            </MDBModal>
        </MDBContainer>
        </>
    )
}

export default ChartModal