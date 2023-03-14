import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import "../styles/App.css";
import Home from "./Home";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Company from "./Company";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import ProfileForm from "./ProfileForm";
import HomeAnon from "./HomeAnon";
import Comp404 from "./Comp404";
import Logout from "./Logout";
import ItemsContext from "./ItemsContext";
import CompanyContextProvider from "./CompanyContextProvider";

function Routes() {
  //Our menu items and the function to properly add new items with our NewItemForm
  const { companies, jobs, token, currUser, register, update, getCompaniesFiltered, login, logout } = useContext(ItemsContext);

  return (
    <Switch>
    <Route exact path="/">
      <Home token={token} currUser={currUser} />
    </Route>
    <Route exact path="/companies">
      <CompanyList companies={companies} getCompaniesFiltered={getCompaniesFiltered} />
    </Route>
    <Route path="/companies/:handle">
      <CompanyContextProvider>
        <Company />
      </CompanyContextProvider>
    </Route>
    <Route exact path="/jobs">
      <JobList jobs={jobs} />
    </Route>
    <Route path="/login">
      <LoginForm login={login} />
    </Route>
    <Route path="/register">
      <RegisterForm register={register} />
    </Route>
    <Route path="/profile">
      <ProfileForm update={update} currUser={currUser} />
    </Route>
    <Route path="/logout">
      <Logout logout={logout} />
    </Route>
    <Route path="/homeanon">
      <HomeAnon />
    </Route>
    <Route>
      <Comp404 />
    </Route>
  </Switch>
  );
}

export default Routes;
