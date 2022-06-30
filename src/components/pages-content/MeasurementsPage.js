import React from 'react';
import { Link } from 'react-router-dom';
// import { useTable } from 'react-table';

import MultiAxisLine from '../chart-components/MultiAxisLine';
// import [chart] from '../chart-components/VerticalBar';
import ContainerTable from '../table-components/ContainerTable';

import { WELL_MODULES, MEASUREMENTS, WARNINGS } from '../../utils/GLOBAL-STATE';

function MeasurementsPage(props) {     
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

    const dataMvpTestWell_Ph = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
            label: 'pH',
            data: [2, 4, 5, 4, 2, 1],
            fill: false,
            backgroundColor: 'darkviolet',
            borderColor: 'violet',
            yAxisID: 'y-axis-1',
            },
            // {
            // label: 'Temperature',
            // data: [1, 2, 5, 4, 2, 1],
            // fill: false,
            // backgroundColor: 'rgb(54, 162, 235)',
            // borderColor: 'rgba(54, 162, 235, 0.2)',
            // yAxisID: 'y-axis-1',
            // },
            // {
            // label: 'Electric C.',
            // data: [7, 5, 1, 7, 2, 4],
            // fill: false,
            // backgroundColor: 'darkviolet',
            // borderColor: 'violet',
            // yAxisID: 'y-axis-1',
            // },
        ],
    }

    const dataMvpTestWell_Temperature = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
            label: 'Temperature',
            data: [3, 8, 9, 5, 2, 6],
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
            yAxisID: 'y-axis-1',
            },
        ],
    }

    const dataMvpTestWell_ElectricConductivity = {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [
            {
            label: 'Electric C.',
            data: [7, 5, 1, 7, 2, 4],
            fill: false,
            backgroundColor: 'rgb(54, 162, 235)', 
            borderColor: 'rgba(54, 162, 235, 0.2)', 
            yAxisID: 'y-axis-1',
            },
        ],
    }

    const optionsAllWells = {
        scales: {
            yAxes: [
            {
                type: 'linear',
                display: true,
                position: 'left',
                id: 'y-axis-1',
            },
            {
                type: 'linear',
                display: true,
                position: 'right',
                id: 'y-axis-2',
                gridLines: {
                drawOnArea: false,
                },
            },
            ],
        },
    }

    return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800 text-center">Measurements</h1>
    <br />

    {/* Warnings section */}
    <div>
        <div className="text-xs font-weight-bold text-uppercase mb-1">
            <h3>All Warnings </h3>
        </div>

         {/* Warnings */}
        <div className="row">
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
            
        </div>
        
    </div>


    {/* Measurements Section */}
    <div>
        <div class="text-xs font-weight-bold text-uppercase mb-1">
            <h3>Measurements - All Well Modules</h3>
        </div>

        <div class="row">

            {/* pH Levels */}
            <div class="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div class="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h5 class="m-0 font-weight-bold text-primary">MVP Test Well</h5>
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
                        <h5>PH values</h5>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_Ph}
                                options={optionsAllWells}
                            />
                        </div>
                        <hr />

                        <h4>Temperature values</h4>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_Temperature}
                                options={optionsAllWells}
                            />
                        </div>
                        <hr />

                        <h4>Electric conductivity values</h4>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_ElectricConductivity}
                                options={optionsAllWells}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Conductivity Levels */}
            <div class="col-xl-12 col-lg-12">
                <div class="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Mock Well Vejen</h6>
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
                        <h5>PH values</h5>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_Ph}
                                options={optionsAllWells}
                            />
                        </div>
                        <hr />

                        <h4>Temperature values</h4>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_Temperature}
                                options={optionsAllWells}
                            />
                        </div>
                        <hr />

                        <h4>Electric conductivity values</h4>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_ElectricConductivity}
                                options={optionsAllWells}
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Temperature */}
            <div class="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                <div class="card border-left-warning shadow mb-4">
                    {/* <!-- Card Header - Dropdown --> */}
                    <div
                        class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 class="m-0 font-weight-bold text-primary">Mock Well Sønderborg</h6>
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
                        <h5>PH values</h5>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_Ph}
                                options={optionsAllWells}
                            />
                        </div>
                        <hr />

                        <h4>Temperature values</h4>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_Temperature}
                                options={optionsAllWells}
                            />
                        </div>
                        <hr />

                        <h4>Electric conductivity values</h4>
                        <div class="">
                            <MultiAxisLine 
                                data={dataMvpTestWell_ElectricConductivity}
                                options={optionsAllWells}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </>)
};

export default MeasurementsPage;