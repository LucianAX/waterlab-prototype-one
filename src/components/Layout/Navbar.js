import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../media/Logo1Blue.png';

class Navbar extends React.Component {
    
    // foloseste routematch pt highlight cand sunt pe pagina respectiva
    render() {
        return (
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
            {/* <!-- Sidebar --> */}

            {/* <!-- Sidebar - Brand --> */}
            <Link to="/overview" className="sidebar-brand d-flex align-items-center justify-content-center">
                <div className="sidebar-brand-icon ">
                    {/* <i className="fas fa-laugh-wink"></i> */}
                    <img style={{ width: 75 }} src={logo} alt="WCG Logo" />
                </div>
                <div className="sidebar-brand-text mx-3">WaterLab</div>
            </Link>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Overview --> */}
            <li className="nav-item active">
                <Link to="/overview" className="nav-link">
                    <i className="fas fa-fw fa-tachometer-alt"></i>
                    <span>Overview</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Heading --> */}
            <div className="sidebar-heading">
                Pages
            </div>

            {/* <!-- Nav Item - Measurements --> */}
            <li className="nav-item">
                <Link to="/measurements" className="nav-link">
                    <i className="fas fa-fw fa-chart-area"></i>
                    <span>Measurements</span>
                </Link>
            </li>

            
            <li className="nav-item">
                <Link to="/well-modules-list" className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Well Modules List</span>
                </Link>
            </li>

            {/* <li className="nav-item">
                <Link to="/device-list" className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Single device</span>
                </Link>
            </li> */}
            
            <li className="nav-item">
                <Link to="/map" className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Map</span>
                </Link>
            </li>

            
            <li className="nav-item">
                <Link to="/contact" className="nav-link">
                    <i className="fas fa-fw fa-table"></i>
                    <span>Contact</span>
                </Link>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />

            {/* <!-- Sidebar Toggler (Sidebar) --> */}
            {/* <div className="text-center d-none d-md-inline"> */}
                {/* <button className="rounded-circle border-0" id="sidebarToggle"></button> */}
            {/* </div> */}

            {/* <!-- End of Sidebar --> */}
            </ul>
        )
    }
}

export default Navbar;