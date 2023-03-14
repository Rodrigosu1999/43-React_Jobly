import React from "react";
import JobCard from "./JobCard";
import "../styles/List.css";

//List of jobs
function JobList({ jobs }) {
  return (
    <section className="col-md-16 List">
          <h1>Jobs</h1>
          <p>Open Positions</p>
            {jobs.map(job => (
              <JobCard job={job} key={job.id} />
            ))}
    </section>
  );
}

export default JobList;
