import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/LandingPage/LandingPage.js";
import LoginPage from "./views/LoginPage/LoginPage.js";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import AddTimetable from "./views/Timetable/AddTimetable";
import AllTimetable from "./views/Timetable/AllTimetable";
import UpdateTimetable from "./views/Timetable/UpdateTimetable";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer"
import UserDetailsPage from "./views/UserDetailsPage/UserDetailsPage";
import NoticeSession_Create from './LecModule_Management/NoticeSessions/NoticeSession_Create';
import NoticeSession_ViewL from './LecModule_Management/NoticeSessions/NoticeSession_ViewL';
import NoticeSession_Update from './LecModule_Management/NoticeSessions/NoticeSession_Update';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/user" component={UserDetailsPage} />
          <Route exact path="/createNS/:no" component={Auth(NoticeSession_Create, true)} />
          <Route exact path="/allViewNS/:Mno" component={Auth(NoticeSession_ViewL, true)} />
          <Route exact path="/add" component={Auth(AddTimetable, false)} />
          <Route exact path="/all" component={Auth(AllTimetable, false)} />
          <Route exact path="/update/:id" component={Auth(UpdateTimetable, true)} />
          <Route exact path="/updateNS/:id" component={Auth(NoticeSession_Update, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;