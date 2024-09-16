import React from 'react';
import { Link } from 'react-router-dom';

// import VerticalBar from '../chart-components/VerticalBar';
// import [chart] from '../chart-components/VerticalBar';

function MapPage(props) {
//   LOGIC CODE GOES HERE !!
    // function initMap() {
    // const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 10,
    //     center: { lat: 54.9629533, lng: 9.7766695 },
    // });

    // const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    // const markers = locations.map((location, i) => {
    //     return new google.maps.Marker({
    //     position: location,
    //     label: labels[i % labels.length],
    //     });
    // });

    // new MarkerClusterer(map, markers, {
    //         imagePath:
    //         "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    //     });
    // }

    // const locations = [
    // { lat: 54.905306, lng: 9.654167 },
    // { lat: 54.998056, lng: 9.670972 },
    // { lat: 55.050194, lng: 9.806806 },
    // ];

  <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://unpkg.com/@google/markerclustererplus@4.0.1/dist/markerclustererplus.min.js"></script>
    <script
      src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD3syXNR2ev7O-pzaq4vm7k8RFThqHM-lU&callback=initMap&libraries=&v=weekly" 
      defer
    ></script>
  
  function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: { lat: 54.9629533, lng: 9.7766695 },
  });

  const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const markers = locations.map((location, i) => {
    return new google.maps.Marker({
      position: location,
      label: labels[i % labels.length],
    });
  });

  new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}

const locations = [
  { lat: 54.905306, lng: 9.654167 },
  { lat: 54.998056, lng: 9.670972 },
  { lat: 55.050194, lng: 9.806806 },
];

  //LOGIC END
  
  return (<>
    {/* <!-- Page Heading --> */}
    <h1 className="h1 mb-2 text-gray-800">Map</h1>

    {/* Map Section */}
    <div class="row">        

        {/* Map with devices */}
        <div class="col-xl-12 col-lg-12">
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
                            <div class="dropdown-divider"></div>np
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
                        <div id="map"></div>
                    </div>
                </div>
            </div>
        </div>

        {/* Buttons for devices */}
        <div class="col-xl-12 col-lg-12">
            <div class="card border-left-success shadow mb-4">
                {/* <!-- Card Header - Dropdown --> */}
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
                {/* <!-- Card Body --> */}
                <div class="card-body">
                    <div class="">
                        {/* Container with buttons */}
                                    {/* <div className="col"> */}
                                        <ul class="row"
                                            style={{height: 290,
                                                    display: "flex",
                                                    flexDirection: "column",
                                                    justifyContent: "center",
                                                    listStyle: "none"}}>

                                            <li class="col-xl-3 col-md-2">
                                              <h4>MVP Test Well</h4>
                                                <label>
                                                  <input type="checkbox" /> Status
                                                </label>
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h4>Mock Well Vejen</h4>
                                                <label>
                                                  <input type="checkbox" /> Status
                                                </label>
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h4>Mock Well Sønderborg</h4>
                                                <label>
                                                  <input type="checkbox" /> Status
                                                </label>
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h4>Mock Device #1</h4>
                                                <label>
                                                  <input type="checkbox" /> Status
                                                </label>
                                            </li>
                                            <li class="col-xl-3 col-md-2">
                                              <h4>Mock Device #2</h4>
                                                <label>
                                                  <input type="checkbox" /> Status
                                                </label>
                                            </li>                                            
                                        </ul>
                                    {/* </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div>
      {/* Mapping function for iterating through the list of devices
          Component: Button with activation checkbox */}
    </div>
  </>)
};

export default MapPage;
