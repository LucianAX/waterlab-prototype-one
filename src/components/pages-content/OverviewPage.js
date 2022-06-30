import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';
import ContainerTable from '../table-components/ContainerTable';
import { WARNINGS } from '../../utils/GLOBAL-STATE';

function OverviewPage(props) {
//   LOGIC CODE GOES HERE !!
    const warningsDataArray = WARNINGS.map(warning => {
        return {
        col1: warning.warningID,
        col2: warning.wellModuleID,
        col3: warning.warningTriggeredBy[0].sensorType,
        col4: warning.warningTriggeredBy[0].warningPoint,
        col5: warning.warningTriggeredBy[0].recordedValue,
        col6: warning.timeCreated
        }
    })

    const warningsColumnsArray = [
        {
            Header: 'Warning ID',
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Module ID',
            accessor: 'col2',
        },
        {
            Header: 'Triggered Sensor',
            accessor: 'col3',
        },
        {
            Header: 'Warning Point',
            accessor: 'col4',
        },
        {
            Header: 'Recorded Value',
            accessor: 'col5',
        },
        {
            Header: 'Time registered',
            accessor: 'col6',
        }
    ];

  return (
  <>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Overview</h1>
    
    {/* Map Section 2 */}
    {/* <div class="text-xs font-weight-bold text-uppercase mb-1">
        <h2>Map</h2>
    </div> */}
    
    {/* <div class="row">
        Map with devices
        <div class="col-xl-9 col-lg-8">
            <div class="card border-left-success shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Map of WaterLab Well Modules</h6>
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
                <!-- Card Body -->
                <div class="card-body">
                    <div class="">

                        ZOLTAN'S TASK 
                        <iframe title="map" class="col-xl-12 col-lg-12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25940.879716104955!2d9.78649102763798!3d54.92272710118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b337c2e0ee44ed%3A0x49a0979574e7aeeb!2zNjQwMCBTw7huZGVyYm9yZywgRMOhbnNrbw!5e0!3m2!1ssk!2sus!4v1604918481297!5m2!1ssk!2sus"
                                width="750" height="300" frameborder="0" style={{ border: 1 }}
                                allowfullscreen="" aria-hidden="true" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        Buttons with devices
        <div class="col-xl-3 col-lg-4">
            <div class="card border-left-success shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                    class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Well Modules</h6>
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
                <!-- Card Body -->
                <div class="card-body">
                    <div class="">
                        Container with buttons to devices
                                    <div className="col">
                                        <ul style={{ height: 290,
                                                     display: "flex",
                                                     flexDirection: "column",
                                                     justifyContent: "space-around",
                                                     listStyle: "none" }}>

                                            <li><button>MVP Test Well</button></li>
                                            <li><button>Mock Well Vejen</button></li>
                                            <li><button>Mock Well Sønderborg</button></li>
                                            <li><button>Mock Well #1</button></li>
                                            <li><button>Mock Well #2</button></li>
                                        </ul>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}


    {/* Warnings Section */}
    <div>
        <div class="text-xs font-weight-bold text-uppercase mb-1">
            <h2>Recent Warnings</h2>
        </div>
        
        {/* Conditional for displaying device with warning */}
        {/* Device name */}
        {/* Device data in tabel */}
        <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div className="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        {/* <h6 className="m-0 font-weight-bold text-primary">pH Levels</h6> */}
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
                        <div className="row">
                            <div className="col-xl-12 col-lg-12">
                                <ContainerTable dataArray={ warningsDataArray } columnsArray={ warningsColumnsArray } />
                            </div>
                            {/* <div className="col-xl-3 col-lg-4">
                                <MultiAxisLine options={{ maintainAspectRatio: false }} />
                            </div> */}
                        </div>
                    </div>
                </div>
        </div>

        <div class="row">

            {/* Warning #1 */}
            <div class="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div class="card border-left-danger shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-danger">Warning #{1}</h6>
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
                            <VerticalBar options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning #2 */}
            <div class="col-xl-12 col-lg-12">
                <div class="card border-left-danger shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-danger">Warning #{2}</h6>
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
                            <VerticalBar options={{ maintainAspectRatio: false }}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </>
  )
};

export default OverviewPage;