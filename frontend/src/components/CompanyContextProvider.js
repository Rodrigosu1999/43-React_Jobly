import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import CompanyContext from "./CompanyContext";
import JoblyApi from "../Api";

//Context for displaying a single company
const CompanyContextProvider = ({children}) => {
  const [company, setCompany] = useState({});
  const { handle } = useParams();

  useEffect(() => {
    getCompany(handle);
  }, [handle]);

  async function getCompany(urlHandle) {
    let res = await JoblyApi.getCompany(urlHandle);
    setCompany(res);
  }

  let name = company.name;
  let description = company.description;
  let jobs = company.jobs;

  return (
            <CompanyContext.Provider value={{name, description, jobs}}>
                {children}
            </CompanyContext.Provider>
  )
}

export default CompanyContextProvider;