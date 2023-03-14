import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css"
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardSubtitle,
  Button
} from "reactstrap";
import ItemsContext from "./ItemsContext";

//Single company card
function JobCard({ job }) {
  const { apply, currUser } = useContext(ItemsContext);
  const applied = currUser.applications.includes(job.id);
  const handleClick = () => {
    console.log("BOOOOM");
    apply(currUser.username, job.id);
  };
  return (
    <>
              <Card className="Job-Card">
                <CardBody>
                  <CardTitle className="font-weight-bold text-center">
                      {job.title}
                  </CardTitle>
                  <CardSubtitle>
                  <Link to={`/companies/${job.companyHandle}`} key={job.id}>
                      {job.companyName}
                    </Link>
                  </CardSubtitle>
                  <CardText>
                    {job.salary ?
                    <p>Salary: {job.salary}</p> :
                    <p>Salary: Not provided by the employer</p>}
                    {job.equity ? 
                    <p>Equity: {job.equity}</p> : 
                    <p>Equity: 0</p>}
                    </CardText>
                </CardBody>
                {applied ? (
                  <Button color="danger" disabled>Applied</Button>
                ) : (
                  <Button color="danger" onClick={() => handleClick()}>Apply</Button>
                )}
              </Card>
    </>
  );
}

export default JobCard;
