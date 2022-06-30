//Mock Data
let WELL_MODULES = [
  {
    wellModuleID: 17,
    dateCreated: '10.11.2020',
    moduleName: 'MVP Test Well',
    status: true, // means ACTIVE
    address: 'Faldhøjvej 1, 6230 Rødekro',
    locationLatitude: `55°04'16.9"N`,
    locationLongitude: `9°19'21.4"E`,
    intervalCollectingData: 300000, // 5 minutes
    warningPointPh: 8.0,
    warningPointTemperature: 17,
    warningPointElectricConductivity: 30,
    sensorsInstalled: [
      { sensorID: 222, sensorType: 'pH Sensor' },
      { sensorID: 333, sensorType: 'Temperature Sensor' },
      { sensorID: 444, sensorType: 'Electric Conductivity Sensor' }
    ]
  },
  { 
    wellModuleID: 58,
    dateCreated: '11.11.2020',
    moduleName: 'Mock Well Vejen',
    status: true, // means ACTIVE
    address: '',
    locationLatitude: 'beta latitude',
    locationLongitude: 'beta longitude',
    intervalCollectingData: 600000, // 10 minutes
    warningPointPh: 8.5,
    warningPointTemperature: 16,
    warningPointElectricConductivity: 25,
    sensorsInstalled: [
      { sensorID: 222, sensorType: 'pH Sensor' },
      { sensorID: 333, sensorType: 'Temperature Sensor' },
      { sensorID: 444, sensorType: 'Electric Conductivity Sensor' }
    ]
  },
  { 
    wellModuleID: 64,
    dateCreated: '11.11.2020',
    moduleName: 'Mock Well Sønderborg',
    status: false, // means DISABLED
    address: '',
    locationLatitude: 'theta latitude',
    locationLongitude: 'theta longitude',
    intervalCollectingData: 480000, // 8 minutes
    warningPointPh: 8.5,
    warningPointTemperature: 17,
    warningPointElectricConductivity: 30,
    sensorsInstalled: [
      { sensorID: 222, sensorType: 'pH Sensor' },
      { sensorID: 333, sensorType: 'Temperature Sensor' },
      { sensorID: 444, sensorType: 'Electric Conductivity Sensor' }
    ]
  }
];

let MEASUREMENTS = [
  {
    measurementID: 1205,
    wellModuleID: 58,
    timeCreated: '15.02.2021 - 18:00',
    pH: 8.5,
    temperatureCelsius: 16.5,
    electricConductivity: 35
  },
  {
    measurementID: 2924,
    wellModuleID: 17,
    timeCreated: '12.03.2021 - 15:00',
    pH: 9.0,
    temperatureCelsius: 12.0,
    electricConductivity: 40
  },
  {
    measurementID: 3549,
    wellModuleID: 64,
    timeCreated: '18.01.2021 - 20:00',
    pH: 8.0,
    temperatureCelsius: 16.5,
    electricConductivity: 20,
  }
];

let SENSORS = [
  {
    sensorID: 222,
    dateCreated: '10.11.2020',
    type: 'pH Sensor',
    model: 'Tianjin XHF - pH Sensor',
    manufacturer: 'Tianjin Co.',
  },
  {
    sensorID: 333,
    dateCreated: '10.11.2020',
    type: 'Temperature Sensor',
    model: 'Xihua Zhi - Temperature Celsius Sensor',
    manufacturer: 'Xihua Zhi Co.'
  },
  {
    sensorID: 444,
    dateCreated: '10.11.2020',
    type: 'Electric Conductivity Sensor',
    model: 'Bhuoi Ji - Electric Conductivity Sensor',
    manufacturer: 'Bhuoi Ji Co.'
  }
];

let WARNINGS = [
  {
    warningID: 1,
    wellModuleID: 17,
    measurementID: 2924,
    timeCreated: '12.03.2021 - 15:03',
    warningTriggeredBy: [
      { sensorType: 'pH Sensor', warningPoint: 8.0, recordedValue: 9.0 },
    ] 
  },
  {
    warningID: 2,
    wellModuleID: 58,
    measurementID: 1205,
    timeCreated: '15.02.2021 - 18:00',
    warningTriggeredBy: [
      { sensorType: 'Temperature Sensor', warningPoint: 16, recordedValue: 16.5 },
      { sensorType: 'Electric Conductivity Sensor', warningPoint: 25, recordedValue: 35 }
    ]
  }
];


// setTimeout(function(), intervalCollectingData)


// Server GET Request - General
/*
fetch('https://GETendpoint')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      //Code to execute
    });
*/

// Server GET Request - Units (understood as devices)
/*
fetch('https://GETendpointUnits')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      //Code to execute
      // const Units = jsonResponse; //array of Unit objects
    });
*/

// Server GET Request - Measurements
/*
fetch('https://GETendpointMeasurements')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      //Code to execute
      // checkMeasurementsForWarnings();
    });
*/

// Server GET Request - Sensors
/*
fetch('https://GETendpointSensors')
    .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Request failed!');
    }, networkError => console.log(networkError.message))
    .then(jsonResponse => {
      // Code to execute
      // const sensors = jsonResponse; //Array of sensor objects
    });
*/
/*
// Check Measurements for passing warning points
const checkMeasurementsForWarnings = () => {
  measurements.forEach(
    measurement => {
      const findNameOfUnitWithWarning = (ID) => {
        const unitWithWarning = units.find(unit => unit.Id === ID);
        return unitWithWarning.Name;
      };
      
      if (measurement.Ph > warningPointPH) {
        warnings.push({
            measurement: measurement,
            warningType: 'PH',
            // unitName: findNameOfUnitWithWarning(measurement.Unit_Id),
            
        });  
      }
      if (measurement.Conductivity > warningPointConductivity) {
        warnings.push({
            measurement: measurement,
            warningType: 'Conductivity',
            // unitName: findNameOfUnitWithWarning(measurement.Unit_Id),
          
        });
      }
      if (measurement.TempC > warningPointTemperature) {
        warnings.push({
            measurement: measurement,
            warningType: 'Temperature',
            // unitName: findNameOfUnitWithWarning(measurement.Unit_Id),
            
        })
      }
    }
  );
}
*/
// checkMeasurementsForWarnings();

export { WARNINGS, WELL_MODULES, MEASUREMENTS, SENSORS };