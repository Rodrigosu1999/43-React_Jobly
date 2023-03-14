import React from "react";
import { useHistory } from "react-router-dom";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";
import "../styles/Welcome.css"

//Welcome page for when the user is not logged in
function HomeAnon() {
  const history = useHistory();
  const handleClick = (link) => {
    history.push(link)
  };
  return (
      <Card className="Welcome Welcome-Anon">
        <CardBody className="text-center">
          <CardTitle>
            <h3 className="font-weight-bold">
              Jobly
            </h3>
          </CardTitle>
          <CardSubtitle>
            <h4>The place to find your job</h4>
          </CardSubtitle>
          <Button color="primary" onClick={() => handleClick("/login")}>Login</Button>
          <Button color="primary" onClick={() => handleClick("/register")}>Register</Button>
        </CardBody>
      </Card>
  );
}

export default HomeAnon;
