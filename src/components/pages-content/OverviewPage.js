import React from 'react';
import { Link } from 'react-router-dom';
import { useTable } from 'react-table';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/';
import TableTemplate from '../table-components/TableTemplate';


function OverviewPage(props) {
//   LOGIC CODE GOES HERE !!
    const data = React.useMemo(
        () => [
        {
            col1: '0007',
            col2: 'PoC Device',
            col3: 'PH',
            col4: '9.0',
            col5: '-',
            col6: '18:00'
        },
        {
            col1: '7373',
            col2: 'Test Well Vejen',
            col3: 'Conductivity',
            col4: '40',
            col5: 'S/m',
            col6: '15:00'
        },
        {
            col1: '6400',
            col2: 'Mock Device Sonderbronx',
            col3: 'Temperature',
            col4: '19',
            col5: 'C',
            col6: '20:00'
        },
        ],
        []
    );

    const columns = React.useMemo(
        () => [
        {
            Header: 'Device ID',
            accessor: 'col1', // accessor is the "key" in the data
        },
        {
            Header: 'Device Name',
            accessor: 'col2',
        },
        {
            Header: 'Measurement Type',
            accessor: 'col3',
        },
        {
            Header: 'Measurement Unit',
            accessor: 'col4',
        },
        {
            Header: 'Measurement Value',
            accessor: 'col5',
        },
        {
            Header: 'Time created',
            accessor: 'col6',
        }
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });

    const tableUtils = {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    }

    return (
    <>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 position-static" 
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

        {/* Map with devices */}
        <div className="col-xl-9 col-lg-8">
            <div className="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
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
                {/* <!-- Card Body --> */}
                <div className="card-body">
                    <div className="">

                        {/* ZOLTAN'S TASK  */}
                        <iframe title="map" className="col-xl-12 col-lg-12"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25940.879716104955!2d9.78649102763798!3d54.92272710118654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b337c2e0ee44ed%3A0x49a0979574e7aeeb!2zNjQwMCBTw7huZGVyYm9yZywgRMOhbnNrbw!5e0!3m2!1ssk!2sus!4v1604918481297!5m2!1ssk!2sus"
                                width="750" height="300" frameborder="0" style={{ border: 1 }}
                                allowfullscreen="" aria-hidden="true" tabindex="0">
                        </iframe>
                    </div>
                </div>
            </div>
        </div>

        {/* Buttons with devices */}
        <div className="col-xl-3 col-lg-4">
            <div className="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
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
                {/* <!-- Card Body --> */}
                <div className="card-body">
                    <div className="">
                        {/* Container with buttons to devices */}
                                    {/* <div className="col"> */}
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
                                    {/* </div> */}
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
        
        {/* Conditional for displaying device with warning */}
        {/* Device name */}
        {/* Device data in tabel */}
        
        <div className="row">

            {/* Warning #1 */}
            <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div className="card border-left-danger shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-danger">Warning #{1}</h6>
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
                        <div className="">
                            <TableTemplate tableUtils={ tableUtils } />
                        </div>
                        <div className="">
                            <VerticalBar options={{ maintainAspectRatio: false }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning #2 */}
            <div className="col-xl-12 col-lg-12">
                <div className="card border-left-danger shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold text-danger">Warning #{2}</h6>
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
                        <div className="">
                            <TableTemplate tableUtils={ tableUtils } />
                        </div>
                        <div className="">
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