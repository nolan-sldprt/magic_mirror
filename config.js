// stuff before

modules: [
  {
    module: "clock",
    position: "top_left", // This can be any of the regions.
    config: {
    timeFormat: 24, //12 or 24
    timezone: Canada/Atlantic, //Etc/GMT-4
    showSunTimes: true,
    lat: 44.641296,
    lon: -63.581156,
    dateFormat: "dddd, YYYY/MM/DD",
    },
  },
  
  {
    module: "currentweather",
    position: "top_right", // This can be any of the regions.
    // Best results in left or right regions.
    config: {
      // See 'Configuration options' for more information.
      location: "Halifax,Canada",
      locationID: "", //Location ID from https://bulk.openweathermap.org/sample/city.list.json.gz
      appid: "", //openweathermap.org API key.
      units: "metric",
      degreeLabel: true,
      updateInterval: 300000
      timeFormat: 24,
      showWindDirection: true,
      showWindDirectionAsArrow: true,
      showHumidity: true,
      
      //showIndoorTeemperature: true, //need indoor temperature sensor to get this measurement
      
      showFeelsLike: true,
      useKMPHwind: true,
      initialLoadDelay: 0,
      
      
    },
  },
   
  {
    module: "updatenotification",
    position: "top_center", // This can be any of the regions.
    config: {
      updateInterval: 1800000
      //ignoreModules: []//
    },
  },

  
];
