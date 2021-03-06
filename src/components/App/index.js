import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from "../Navigation";
import LandingPage from "../Landing";
import SignUpPage from "../SignUp";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import ProfilePage from "../Profile";
import PlanPage from "../Plan";
import SavedPostsPage from "../SavedPosts";
import AboutPage from "../About";
import FeaturesPage from "../Features";
import ContactUsPage from "../ContactUs";
import FAQPage from "../FAQ";
import FAQAnswersPage from "../FAQAnswers";
import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import "semantic-ui-css/semantic.min.css";

const App = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Route path={ROUTES.PROFILE} component={ProfilePage} />
      <Route path={ROUTES.PLAN} component={PlanPage} />
      <Route path={ROUTES.SAVED_POSTS} component={SavedPostsPage} />
      <Route path={ROUTES.ABOUT} component={AboutPage} />
      <Route path={ROUTES.FEATURES} component={FeaturesPage} />
      <Route path={ROUTES.CONTACTUS} component={ContactUsPage} />
      <Route path={ROUTES.FAQ} component={FAQPage} />
      <Route path={ROUTES.FAQANSWERS} component={FAQAnswersPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
