import React, {useContext} from "react";
import { Redirect } from "react-router-dom";
import CompanyContext from "./CompanyContext";
import JobCard from "./JobCard";
import "../styles/List.css";

//Company details, displaying the Company and all their available jobs
function Company() {
  const { name, description, jobs } = useContext(CompanyContext);

  setTimeout(() => {
    if (!name) return <Redirect to="/companies" />;
  }, "5000")
  
  return (
    <>
      {name ? (
        <section className="col-md-16 Company List">
          <h1>{name}</h1>
          <p>{description}</p>
          {jobs.map(job => (
                  <JobCard job={job} key={job.id}/>
                ))}
        </section>
      ) : (
        <p>...Loading...</p>
      )}
    </>
  );
}

export default Company;
