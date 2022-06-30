let warnings = [];
let warningPointPH = 8.5;
let warningPointConductivity = 30;
let warningPointTemperature = 17;

//Mock Data
const units = [
  {
    Id: '0007',
    Name: 'PoC Device',
    LocLat: 'alfa latitude',
    LocLong: 'alfa longitude',
    DateCreated: '10.11.2020',
    Owner_id: '1',
    DateRegistered: '10.11.2020',
    Active: 'YES',
  },
  {
    Id: '7373',
    Name: 'Test Well Vejen',
    LocLat: 'beta latitude',
    LocLong: 'beta longitude',
    DateCreated: '11.11.2020',
    Owner_id: '1',
    DateRegistered: '11.11.2020',
    Active: 'YES',
  },
  {
    Id: '6400',
    Name: 'Mock Device Sonderbronx',
    LocLat: 'theta latitude',
    LocLong: 'theta longitude',
    DateCreated: '11.11.2020',
    Owner_id: '1',
    DateRegistered: '11.11.2020',
    Active: 'NO',
  },
]

const measurements = [
  {
    MeasurementId: '123',
    TempC: 15.5,
    Ph: 9.0,
    TimeCreated: '18:00 15.01.2021',
    Unit_Id: '0007', 
    Conductivity: 20,
  },
  {
    MeasurementId: '923',
    TempC: 12.0,
    Ph: 7.5,
    TimeCreated: '15:00 12.01.2021',
    Unit_Id: '7373',
    Conductivity: 40,
  },
  {
    MeasurementId: '749',
    TempC: 16.5,
    Ph: 8.0,
    TimeCreated: '20:00 18.01.2021',
    Unit_Id: '6400',
    Conductivity: 20,
  },
]

const sensors = [
  {
    Id: 'xyz',
    Manufacturer: 'Chinese company no. 10000000',
    Model: 'PH sensor',
    DateCreated: '01.11.2020',
    Unit_Id: '0007', //is it the unit's (device) ID ?
  },
  {
    Id: 'twk',
    Manufacturer: 'Chinese company no. 4000000',
    Model: 'Conductivity sensor',
    DateCreated: '03.11.2020',
    Unit_Id: '7373', //is it the unit's (device) ID ?
  },
  {
    Id: 'zyx',
    Manufacturer: 'Chinese company no. 8000000',
    Model: 'Temperature sensor - Thermistor',
    DateCreated: '05.11.2020',
    Unit_Id: '6400', //is it the unit's (device) ID ?
  },
]



// Server GET Request - General

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


// Server GET Request - Units (understood as devices)

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

checkMeasurementsForWarnings();

export { warnings, units, sensors, measurements };