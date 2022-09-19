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
import UserDetailsUpdatePage from "./views/UserDetailsUpdatePage/UserDetailsUpdatePage";
import NoticeSession_Create from './LecModule_Management/NoticeSessions/NoticeSession_Create';
import NoticeSession_ViewL from './LecModule_Management/NoticeSessions/NoticeSession_ViewL'
import AddPayments from "./views/Payment/AddPayments";
import AdminPayments from "./views/Payment/AdminPayment";
import UpdatePayment from "./views/Payment/UpdatePayment";
import AddInquiry from "./views/Inquiry/AddInqiry";
import AdminInquiry from "./views/Inquiry/AdminInquiry";
import NoticeSession_Update from './LecModule_Management/NoticeSessions/NoticeSession_Update';
import LecMaterials_homeLec from './LecModule_Management/LecMaterials/LecMaterials_homeLec';

function App() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, true)} />
          <Route exact path="/user" component={UserDetailsPage} />
          <Route exact path="/updateUserInfo" component={UserDetailsUpdatePage} />
          <Route exact path="/createNS/:no" component={Auth(NoticeSession_Create, true)} />
          <Route exact path="/allViewNS/:Mno" component={Auth(NoticeSession_ViewL, true)} />
          <Route exact path="/add" component={Auth(AddTimetable, false)} />
          <Route exact path="/all" component={Auth(AllTimetable, false)} />
          <Route exact path="/update/:id" component={Auth(UpdateTimetable, false)} />
            <Route exact path="/payment" component={Auth(AddPayments, true)} />
            <Route exact path="/paymentDetails" component={Auth(AdminPayments, true)} />
            <Route exact path="/updatePaymentDetails" component={Auth(UpdatePayment, false)} />
          <Route exact path="/inquiryDefault" component={Auth(AddInquiry, false)} />
          <Route exact path="/inquiry" component={Auth(AddInquiry, true)} />
          <Route exact path="/inquiryDetails" component={Auth(AdminInquiry, true)} />
          <Route exact path="/updateNS/:id" component={Auth(NoticeSession_Update, true)} />
          <Route exact path="/homeLecMat/:id" component={Auth(LecMaterials_homeLec, true)} />
        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;