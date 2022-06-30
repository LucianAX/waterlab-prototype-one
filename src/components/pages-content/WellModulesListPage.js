import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
import ContainerTable from '../table-components/ContainerTable';

import { WELL_MODULES } from '../../utils/GLOBAL-STATE';

function WellModulesListPage(props) {
    const dataArray = WELL_MODULES.map(module => {
        return {
            col1: module.wellModuleID,
            col2: module.moduleName,
            col3: module.status === true ? 'Active' : 'False',
            col4: module.locationLatitude,
            col5: module.locationLongitude,
            col6: module.dateCreated,
        }
    });

    const columnsArray = [
        {
            Header: 'Module ID',
            accessor: 'col1', 
        },
        {
            Header: 'Module Name',
            accessor: 'col2',
        },
        {
            Header: 'Module Status',
            accessor: 'col3',
        },
        {
            Header: 'Location Latitude',
            accessor: 'col4',
        },
        {
            Header: 'Location Longitude',
            accessor: 'col5',
        },
        {
            Header: 'Date registered',
            accessor: 'col6',
        }
    ];

  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Well Modules List</h1>
    
    {/* Map section */}
    <div class="row">        

        {/* Map with devices */}
        <div class="col-xl-10 col-lg-9">
            <div class="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Map of WaterLab modules</h6>
                    <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">Choose an option:</div>
                            <a class="dropdown-item" href="#">Reload data</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Close</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                    <div class="">

                        {/* ZOLTAN'S TASK */}
                        <iframe title="map" class="col-xl-12 col-lg-12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25940.879716104955!2d9.78649102763798!3d54.92272710118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b337c2e0ee44ed%3A0x49a0979574e7aeeb!2zNjQwMCBTw7huZGVyYm9yZywgRMOhbnNrbw!5e0!3m2!1ssk!2sus!4v1604918481297!5m2!1ssk!2sus"
                                width="750" height="400" frameborder="0" style={{ border: 1 }}
                                allowfullscreen="" aria-hidden="true" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        {/* CRUD buttons */}
        <div class="col-xl-2 col-lg-3">
            <div class="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Modules</h6>
                    <div class="dropdown no-arrow">
                        <a class="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i class="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div class="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink">
                            <div class="dropdown-header">Choose an option:</div>
                            <a class="dropdown-item" href="#">Reload data</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Close</a>
                        </div>
                    </div>
                </div>
                {/* <!-- Card Body --> */}
                <div class="card-body">
                    <div class="">
                        {/* Container with buttons */}
                                    {/* <div className="col"> */}
                                        <ul style={{height: 385,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    listStyle: "none" }}>

                                            <li><button>Add module</button></li>
                                            <li><button>Delete module</button></li>
                                        </ul>
                                    {/* </div> */}
                    </div>
                </div>
            </div>
        </div> 
    </div>

    {/* All Devices Section */}
    <div className="row">
        {/* {allDevicesArray} */}
        <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
        <div className="card border-left-primary shadow mb-4">
            {/* <!-- Card Header - Dropdown --> */}
            <div
                className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                <h6 className="m-0 font-weight-bold text-primary">All Well Modules</h6>
                <div className="dropdown no-arrow">
                    <a className="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink">
                        <div className="dropdown-header">Choose an option:</div>
                        <a className="dropdown-item" href="#">Reload data</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" href="#">Close</a>
                    </div>
                </div>
            </div>
            {/* <!-- Card Body --> */}
            <div className="card-body">
                <div className="col-xl-11">
                    <ContainerTable dataArray={dataArray} columnsArray={columnsArray} />
                </div>
            </div>
        </div>
    </div>
    </div>

  </>)
};

export default WellModulesListPage;