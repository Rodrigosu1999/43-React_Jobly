import React, {useState, useEffect} from "react";
import ItemsContext from "./ItemsContext";
import JoblyApi from "../Api";
import useLocalStorageState from "../hooks/useLocalStorageState"

//Context Provider for the App for features used in most of the App
const ContextProvider = ({children}) => {
  const [companies, setCompanies] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [token, setToken] = useLocalStorageState("token", false);
  const [currUser, setCurrUser] = useLocalStorageState("currUser", false);

  useEffect(() => {
    getCompanies();
    getJobs();
    JoblyApi.token = token;
  }, []);

  // get call from our db for companies
  async function getCompanies() {
    let companies = await JoblyApi.getCompanies();
    setCompanies(companies);
  }
  
  // get call from our db for companies filtered
  async function getCompaniesFiltered(query) {
    let companies = await JoblyApi.getCompaniesFiltered(query);
    setCompanies(companies);
  }

  //get call from our "db" for drinks
  async function getJobs() {
    let jobs = await JoblyApi.getJobs();
    setJobs(jobs);
  }

  //post call for a user to login
  async function login(username,password) {
    let token = await JoblyApi.login(username, password);
    let res = await JoblyApi.getInfo(username)
    setToken(token);
    setCurrUser(res);
    return token;
  }
  //post call for a user to register
  async function register(username, password, firstName, lastName, email) {
    let token = await JoblyApi.register(username, password, firstName, lastName, email);
    let res = await JoblyApi.getInfo(username);
    setToken(token);
    setCurrUser(res);
    return token;
  }
  
  //patch call for a user to update
  async function update(username, firstName, lastName, email) {
    let res = await JoblyApi.update(username, firstName, lastName, email);
    let user = await JoblyApi.getInfo(username);
    setCurrUser(user);
  }
  
  //post call for a user to apply to a job
  async function apply(username, jobId) {
    let res = await JoblyApi.apply(username, jobId);
    let user = await JoblyApi.getInfo(username);
    setCurrUser(user);
  }
 
  //logout
  async function logout() {
    JoblyApi.logout()
    setToken(false);
    setCurrUser({})
  }

  return (
            <ItemsContext.Provider value={{ companies, jobs, token, currUser, apply, update, register, getCompaniesFiltered, login, logout}}>
                {children}
            </ItemsContext.Provider>
  )
}

export default ContextProvider;