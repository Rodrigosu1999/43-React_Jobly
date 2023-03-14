import React from "react";
import "../styles/List.css";
import CompanyCard from "./CompanyCard";
import SearchCompanyForm from "./SearchCompanyForm";

//List of company cards displayed to the user
function CompanyList({ companies, getCompaniesFiltered }) {

  return (
    <section className="col-md-16 List">
          <h1>Companies</h1>
          <SearchCompanyForm getCompaniesFiltered={getCompaniesFiltered}/>
          <p>These are companies currently hiring!</p>
            {companies.map(company => (
             <CompanyCard company={company} key={company.handle} />
            ))}
    </section>
  );
}

export default CompanyList;
