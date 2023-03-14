import React from "react";
import { Link } from "react-router-dom";
import "../styles/Card.css"
import {
  Card,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

//Individual company card when displaying the company list
function CompanyCard({ company }) {
  return (
    <div className="col-md">
              <Card className="Company-Card">
                <CardBody>
                  <CardTitle className="font-weight-bold text-center">
                    <Link to={`/companies/${company.handle}`} key={company.handle}>
                      {company.name}
                    </Link>
                  </CardTitle>
                  <CardText>
                    {company.description}
                  </CardText>
                </CardBody>
              </Card>
    </div>
  );
}

export default CompanyCard;
