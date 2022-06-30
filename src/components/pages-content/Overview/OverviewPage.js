import React from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';

// importing components
import Warning from '../../page-components/Warning';
import VerticalBar from '../../chart-components/VerticalBar';
// import [chart] from '../chart-components/';
import ContainerTable from '../../table-components/ContainerTable';

// importing utilitaries
import { warnings } from '../../../utils/global_state.js';

function OverviewPage(props) {
    
    return (<>
    
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2" 
        style={{ textAlign: 'center',
                 color: '#0A556B' }}>
            Overview
    </h1>

    {/* Map Section 2 */}
    <div className="text-xs font-weight-bold text-uppercase mb-1"
         style={{ color: '#0d7fa1' }}>
        <h2>Map</h2>
    </div>

    <div className="row">

        Map with devices
        <div className="col-xl-9 col-lg-8">
            <div className="card border-left-success shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Map of WaterLab devices</h6>
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
                <!-- Card Body -->
                <div className="card-body">
                    <div className="">

                        Map 
                        <iframe title="map" className="col-xl-12 col-lg-12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25940.879716104955!2d9.78649102763798!3d54.92272710118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b337c2e0ee44ed%3A0x49a0979574e7aeeb!2zNjQwMCBTw7huZGVyYm9yZywgRMOhbnNrbw!5e0!3m2!1ssk!2sus!4v1604918481297!5m2!1ssk!2sus"
                                width="750" height="300" frameborder="0" style={{ border: 1 }}
                                allowfullscreen="" aria-hidden="true" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        Buttons with devices
        <div className="col-xl-3 col-lg-4">
            <div className="card border-left-success shadow mb-4">
                <!-- Card Header - Dropdown -->
                <div
                    className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">Devices</h6>
                    <div className="dropdown no-arrow">
                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
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
                <!-- Card Body -->
                <div className="card-body">
                    <div className="">
                        Container with buttons to devices
                                    <div className="col">
                                        <ul style={{height: 290,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "space-around",
                                                    listStyle: "none" }}>

                                            <li><button>Device Proof of Concept</button></li>
                                            <li><button>Device Test Well</button></li>
                                            <li><button>Mock Device #1</button></li>
                                            <li><button>Mock Device #2</button></li>
                                            <li><button>Mock Device #3</button></li>
                                        </ul>
                                    </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {/* Warnings Section */}
    <div>
        <div className="text-xs font-weight-bold text-uppercase mb-1">
            <h2>Warnings</h2>
        </div>
        
        {/* Device name */}
        {/* Device data in tabel */}
        
        <div className="row">
        {/*             
            {
                warnings ? warnings.map(warning => <Warning warning={warning} />)
                        : <h4>No warnings so far! Everything clear on the horizon :)</h4>
            } */}

           { warnings.map(warning => <Warning warning={warning} />) }
           {/* <h4>No warnings so far! Everything clear on the horizon :)</h4> */}

        </div>
    </div>

    </>)
};

export default OverviewPage;


            // {/* Warning #1 */}
            // <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
            //     <div className="card border-left-danger shadow mb-4">
            //         {/* <!-- Card Header - Dropdown --> */}
            //         <div
            //             className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            //             <h6 className="m-0 font-weight-bold text-danger">Warning #{1}</h6>
            //             <div className="dropdown no-arrow">
            //                 <a className="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
            //                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                     <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            //                 </a>
            //                 <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            //                     aria-labelledby="dropdownMenuLink">
            //                     <div className="dropdown-header">Choose an option:</div>
            //                     <a className="dropdown-item" href="#">Reload data</a>
            //                     <div className="dropdown-divider"></div>
            //                     <a className="dropdown-item" href="#">Close</a>
            //                 </div>
            //             </div>
            //         </div>
            //         {/* <!-- Card Body --> */}
            //         <div className="card-body">
            //             <div className="">
            //                 <ContainerTable />
            //             </div>
            //             <div className="">
            //                 <VerticalBar options={{ maintainAspectRatio: false }} />
            //             </div>
            //         </div>
            //     </div>
            // </div>

            // {/* Warning #2 */}
            // <div className="col-xl-12 col-lg-12">
            //     <div className="card border-left-danger shadow mb-4">
            //         {/* <!-- Card Header - Dropdown --> */}
            //         <div
            //             className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            //             <h6 className="m-0 font-weight-bold text-danger">Warning #{2}</h6>
            //             <div className="dropdown no-arrow">
            //                 <a className="dropdown-toggle" id="dropdownMenuLink" href="#" role="button" 
            //                     data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            //                     <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
            //                 </a>
            //                 <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
            //                     aria-labelledby="dropdownMenuLink">
            //                     <div className="dropdown-header">Choose an option:</div>
            //                     <a className="dropdown-item" href="#">Reload data</a>
            //                     <div className="dropdown-divider"></div>
            //                     <a className="dropdown-item" href="#">Close</a>
            //                 </div>
            //             </div>
            //         </div>
            //         {/* <!-- Card Body --> */}
            //         <div className="card-body">
            //             <div className="">
            //                 <ContainerTable />
            //             </div>
            //             <div className="">
            //                 <VerticalBar options={{ maintainAspectRatio: false }}/>
            //             </div>
            //         </div>
            //     </div>
            // </div>
