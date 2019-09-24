import React from 'react';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';
import NavBarContainer from './nav/navbar_container';
import Splash from './splash/splash';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import Footer from './footer/footer';
import ProfileContainer from './profile/profile_container';


const App = () => (
    <div>
         <NavBarContainer/>
            <Switch>
                <AuthRoute exact path="/" component={Splash} />
                <AuthRoute exact path="/login" component={LoginFormContainer} />
                <AuthRoute exact path="/signup" component={SignupFormContainer} />
                {/* <ProtectedRoute exact path="/profile" component={ProfileContainer} /> */}
            </Switch>
        <Footer/>
    </div>
);

export default App;

