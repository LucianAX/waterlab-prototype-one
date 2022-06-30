import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
      {/* <!-- Topbar --> */}

          {/* <!-- Sidebar Toggle (Topbar) --> */}
          <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
              <i className="fa fa-bars"></i>
          </button>


          {/* <!-- Topbar Navbar --> */}
          <ul className="navbar-nav ml-auto">

              {/* <!-- Nav Item - Alerts --> */}
              <li className="nav-item dropdown no-arrow mx-1">
                  <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <i className="fas fa-bell fa-fw"></i>
                      {/* <!-- Counter - Alerts --> */}
                      <span className="badge badge-danger badge-counter">2</span>
                  </a>
                  {/* <!-- Dropdown - Alerts --> */}
                  <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown">
                      <h6 className="dropdown-header">
                          Alerts Center
                      </h6>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="mr-3">
                              <div className="icon-circle bg-primary">
                                  <i className="fas fa-file-alt text-white"></i>
                              </div>
                          </div>
                          <div>
                              <div className="small text-gray-500">November 5, 2020</div>
                              <span className="font-weight-bold">A new WaterLab device added, check it in devices section!</span>
                          </div>
                      </a>
                      <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="mr-3">
                              <div className="icon-circle bg-warning">
                                  <i className="fas fa-donate text-white"></i>
                              </div>
                          </div>
                          <div>
                              <div className="small text-gray-500">November 3, 2020</div>
                              Device <b>number 2</b> has problems with sensors!
                          </div>
                      </a>
                      {/* <a className="dropdown-item d-flex align-items-center" href="#">
                          <div className="mr-3">
                              <div className="icon-circle bg-warning">
                                  <i className="fas fa-exclamation-triangle text-white"></i>
                              </div>
                          </div>
                          <div>
                              <div className="small text-gray-500">October 22, 2019</div>
                              Spending Alert: We've noticed unusually high results of measurement in device <b>number 1</b>.
                          </div>
                      </a> */}
                      <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                  </div>
              </li>

              <div className="topbar-divider d-none d-sm-block"></div>

              {/* <!-- Nav Item - User Information --> */}
              <li className="nav-item dropdown no-arrow">
                  <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                      data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">Region Syddanmark</span>
                      <img className="img-profile rounded-circle"
                          src="./SB-Admin/img/undraw_profile.svg" ></img>
                  </a>
                  {/* <!-- Dropdown - User Information --> */}
                  <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown">
                      <a className="dropdown-item" href="#">
                          <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                          Profile
                      </a>
                      <a className="dropdown-item" href="#">
                          <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                          Settings
                      </a>
                      <div className="dropdown-divider"></div>
                      <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                          <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                          Logout
                      </a>
                  </div>
              </li>
          </ul>
     
      {/* <!-- End of Topbar --> */}
      </nav>
    )
  }
}

export default Header;