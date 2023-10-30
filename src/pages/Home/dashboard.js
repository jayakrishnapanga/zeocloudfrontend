import React from "react";
import { EuiCard, EuiFlexGroup, EuiFlexItem } from "@elastic/eui";
import { useNavigate } from "react-router-dom";
import dashboard1 from "../../assets/dashboard1.png"; // Adjust the path as needed
import dashboard2 from "../../assets/dashboard2.png"; // Adjust the path as needed
import dashboard3 from "../../assets/dashboard3.png";
// import Header from "../components/Header";


import "tailwindcss/tailwind.css"; // Add this line to import Tailwind CSS

function Dashboard() {
//   useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen justify-center align-middle">
      {/* <Header /> */}
      <EuiFlexGroup
        justifyContent="center"
        alignItems="center"
        className="mt-20 mx-56"
      >
        <EuiFlexItem>
          <EuiCard
            title={`Create Meeting`}
            description="Create a new meeting and invite people."
            onClick={() => navigate("/meet")}
            paddingSize="xl"
            className="w-60 ml-96 mb-10"
          >
            <img src={dashboard1} alt="icon" className="w-20 mx-auto mb-2" />
          </EuiCard>
        </EuiFlexItem>
        {/* <EuiFlexItem>
          <EuiCard
            title={`My Meetings`}
            description="View your created meetings."
            onClick={() => navigate("/mymeetings")}
            paddingSize="xl"
            className="w-60"
          >
            <img src={dashboard2} alt="icon" className="w-full" />
          </EuiCard>
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiCard
            title={`Meetings`}
            description="View the meetings that you are invited to."
            onClick={() => navigate("/meetings")}
            paddingSize="xl"
            className="w-60"
          >
            <img src={dashboard3} alt="icon" className="w-20 mx-auto mb-2" />
          </EuiCard>
        </EuiFlexItem> */}
      </EuiFlexGroup>
    </div>
  );
}

export default Dashboard;
