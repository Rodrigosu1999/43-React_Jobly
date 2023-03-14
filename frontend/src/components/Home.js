import React from "react";
import { Redirect } from "react-router-dom";
import { Card, CardBody, CardTitle } from "reactstrap";
import "../styles/Welcome.css"

//Welcome page for the user when logged in
function Home({token, currUser}) {
  
  if (!token) return <Redirect to="/homeanon" />;

  return (
      <Card className="Welcome Welcome-In">
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Welcome to Jobly {`${currUser.firstName} ${currUser.lastName}`}!
            </h3>
          </CardTitle>
        </CardBody>
      </Card>
  );
}

export default Home;
