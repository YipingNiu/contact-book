import React, { Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./styles/css/bootstrap.css";
import "./styles/css/style.css";
import "./styles/css/animate.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Alerts from "./components/layout/Alerts";
import PrivateRoute from "./components/routing/PrivateRoute";

import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import setAuthToken from "./utils/setAuthToken";
import Particles from "react-particles-js";
import particlesOptions from "./utils/particlesOptions";

//If have token,login the user
if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <AlertState>
        <ContactState>
          <Router>
            <Fragment>
              <Particles className='particles' params={particlesOptions} />
              <Navbar />
              <div className='container'>
                <div className='row' style={{ height: "100vh" }}>
                  <div
                    className='col-12 my-auto p-0'
                    style={{
                      height: "750px",
                      boxShadow: "10px 10px 30px #888888"
                    }}
                  >
                    <Alerts />
                    <Route
                      render={({ location }) => (
                        <TransitionGroup>
                          <CSSTransition
                            key={location.key}
                            timeout={750}
                            classNames='switch'
                            appear={false}
                          >
                            <Switch>
                              <PrivateRoute exact path='/' component={Home} />
                              <Route exact path='/about' component={About} />
                              <Route
                                exact
                                path='/register'
                                component={Register}
                              />
                              <Route exact path='/login' component={Login} />
                            </Switch>
                          </CSSTransition>
                        </TransitionGroup>
                      )}
                    />
                  </div>
                </div>
              </div>
            </Fragment>
          </Router>
        </ContactState>
      </AlertState>
    </AuthState>
  );
};

export default App;
