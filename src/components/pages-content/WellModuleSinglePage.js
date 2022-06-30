import React from 'react';
import { Link } from 'react-router-dom';

import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';
import Warning from '../page-components/Warning';

// Import Utilitaries
import { warnings } from '../../utils/global_state';
import ContainerTable from '../table-components/ContainerTable';
import MultiAxisLine from '../chart-components/MultiAxisLine';

function DeviceSinglePage(props) {
  /*
  const warnings = mapping function for iterating through the warnings of this device only
      (remember to filter out other devices)
      <Warning Entry Component></Device>
  */

  const dataArray = [
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
    ];

    const columnsArray = [
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
    ];
  return (<>

    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Device Single - [Device id/name prop] </h1>

    {/* Warnings section */}
    <div>
        {/* {warnings} */}
        { warnings.map(warning => <Warning warning={warning} />) }
    </div>

    {/* Measurements Section - THIS device*/}
    <div>
        {/* pH levels chart */}
        <div>
            <h3>pH Levels</h3>
            <div className="row">
            
                <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                    <div className="card border-left-warning shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">pH Levels</h6>
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
                                <div className="col-xl-9 col-lg-8">
                                    <ContainerTable dataArray={ dataArray } columnsArray={ columnsArray } />
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <MultiAxisLine options={{ maintainAspectRatio: false }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>

        {/* Conductivity Levels Chart*/}
        <div>
            <h3>Conductivity Levels</h3>
            <div className="row">
            
                <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                    <div className="card border-left-warning shadow mb-4">
                        {/* <!-- Card Header - Dropdown --> */}
                        <div
                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h6 className="m-0 font-weight-bold text-primary">Conductivity Levels</h6>
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
                                <div className="col-xl-9 col-lg-8">
                                    <ContainerTable dataArray={ dataArray } columnsArray={ columnsArray } />
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <MultiAxisLine options={{ maintainAspectRatio: false }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* Temperature Levels Chart */}
        <div>
            <h3>Temperature Levels</h3>
            <div className="row">
            
              <div className="col-xl-12 col-lg-12" style={{ width: "100%" }}>
                  <div className="card border-left-warning shadow mb-4">
                      {/* <!-- Card Header - Dropdown --> */}
                      <div
                          className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                          <h6 className="m-0 font-weight-bold text-primary">Temperature Levels</h6>
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
                              <div className="col-xl-9 col-lg-8">
                                  <ContainerTable dataArray={ dataArray } columnsArray={ columnsArray } />
                              </div>
                              <div className="col-xl-3 col-lg-4">
                                  <MultiAxisLine options={{ maintainAspectRatio: false }} />
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
            </div>
        </div>
    </div>
  </>)
};

export default DeviceSinglePage;