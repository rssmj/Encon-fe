import React, { useState } from "react";
import "./App.scss";
import { Route } from "react-router-dom";
import { Navigation } from "./components/mobile/Navigation.js";
import { LandingPage } from "./components/mobile/Landing-Page.js";
import { LogoHeader } from "./components/mobile/Logo-Header.js";
import { DesktopView } from "./components/desktop/Desktop-View.js";
import MediaQuery from "react-responsive";
import { UserContext } from "./context/UserContext.js";
import { DesktopRegister } from "./components/desktop/Desktop-Register";
import { LoginDesktop } from "./components/desktop/Desktop-Login";
import { DesktopNav } from "./components/desktop/Desktop-Nav.js";
import { ApplianceList } from "./components/mobile/Appliance-List";

const App = () => {
  const user = useState({
    name: "",
    email: "",
    password: "",
    state: "",
  });
  return (
    <div className="App">
      <UserContext.Provider value={{ user }}>
        <MediaQuery maxDeviceWidth={1025}>
          <Navigation />
        </MediaQuery>
        <LogoHeader />
        <Route exact path="/">
          <MediaQuery minDeviceWidth={1025}>
            <DesktopNav />
            <ApplianceList />
          </MediaQuery>
          <MediaQuery maxDeviceWidth={1025}>
            <LandingPage />
          </MediaQuery>
        </Route>
        <Route path="/login">
          <LoginDesktop />
        </Route>
        <Route path="/register">
          <DesktopRegister />
        </Route>
      </UserContext.Provider>
    </div>
  );
};

export default App;
