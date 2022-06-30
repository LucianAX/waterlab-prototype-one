
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import 'react-chartjs-2';

// Layout components that appear on all pages
import Navbar from './Navbar';
import Header from './Header';
import Footer from './Footer';
import ScrollTop from './ScrollTop';
import LogoutModal from './LogoutModal';

// Pages Content
import LoginPage from '../pages-content/LoginPage';
import OverviewPage from '../pages-content/OverviewPage';
import MeasurementsPage from '../pages-content/MeasurementsPage';
import WellModulesListPage from '../pages-content/WellModulesListPage';
import WellModuleSinglePage from '../pages-content/WellModuleSinglePage';
import MapPage from '../pages-content/MapPage';
import ContactPage from '../pages-content/ContactPage';
import ProfilePage from '../pages-content/ProfilePage';


export default class Layout extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          ready: false,
          authenticated: false,
          token: null
      };
  }

  async setLoginResponse (loginResponse) {
    if(loginResponse !== null) {
      this.setState({authenticated: true, token: loginResponse.access_token});
    } else {
      this.setState({authenticated: false, token: null})
    }
  }



  render() {
    return (
      <div>
        {/* <!-- Page Wrapper --> */}
        <div id="wrapper">
        
            <Navbar />

            <div id="content-wrapper" class="d-flex flex-column">

              <div id="content">
                <Header />

                <div className="container-fluid">

                  <Switch>

                      <Redirect exact from="/" to="/overview" />


                      <Route path="/overview">
                          <OverviewPage />
                      </Route>

                      <Route path="/measurements">
                          <MeasurementsPage />
                      </Route>

                      <Route path="/well-modules-list">
                          <WellModulesListPage />
                      </Route>

                      <Route path="/well-module-single">
                          <WellModuleSinglePage />
                      </Route>

                      <Route path="/map">
                          <MapPage />
                      </Route>

                      <Route path="/contact">
                          <ContactPage />
                      </Route>

                      <Route path="/profile">
                          <ProfilePage />
                      </Route>
                  </Switch>

                </div>

              </div>

              <Footer />
            </div>
        </div>


        <ScrollTop />
        <LogoutModal/>

      </div>
    )
  }
}
