// stuff before

// future possibilities
// https://forum.magicmirror.builders/topic/10694/how-to-get-the-office-365-calender-url-for-your-magic-mirror/2
// https://github.com/FD-/RPiPlay

// functional modules to add
// https://github.com/werthdavid/MMM-BurnIn
// https://github.com/sheyabernstein/MMM-connection-status
// https://github.com/AlexDespain01/mm-hide-all
// https://github.com/slametps/MMM-NetworkConnection
// https://github.com/PoOwAa/MMM-network-signal
// https://github.com/shbatm/MMM-OnScreenMenu
// https://github.com/MMRIZE/MMM-Remote-Control-Repository

// useful
// https://github.com/pinsdorf/MMM-WeeklySchedule
// https://github.com/vicmora/MMM-GoogleMapsTraffic
// https://github.com/mrdis/MMM-google-route
// https://github.com/pjestico/MMM-GoogleTrafficTimes
// add interior statistics such as humidity and temp
// IOT capabilities
// spotify


modules: [
  {
    module: "calendar",
    position: "top_center", // This can be any of the regions. Best results in left or right regions.
    config: {
      maximumEntries: 20,
      fade: false,
      calendars: [
        {
          symbol: 'flag-checkered',
          url: 'http://localhost:8080/MMM-Formula1/schedule.ics',
        },
      ],
      getRelative: 24,
      urgency:,
      nextDaysRelative: false,
      
      
      // The config property is optional.
      // If no config is set, an example calendar is shown.
      // See 'Configuration options' for more information.
    },
  },

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
    module: "updatenotification",
    position: "top_center", // This can be any of the regions.
    config: {
      updateInterval: 1800000
      //ignoreModules: []//
    },
  },
  
  // https://github.com/jclarke0000/MMM-OpenWeatherForecast
  {
    module: "MMM-OpenWeatherForecast",
    position: "top_right",
    header: "Forecast",
    config: {
      apikey: "",
      latitude: 44.641296,            //number works here
      longitude: -63.581156,          //so does a string
      
      // optionals:
      updateInterval: 10, // in minutes
      displayKmhForWind: true,
      extraCurrentConditions: {
        highLowTemp: true,
        precipitation: true,
        sunrise: true,
        sunset: true,
        wind: true,
        barometricPressure: false,
        humidity: true,
        dewPoint: false,
        uvIndex: true,
        visibility: false
      },
      iconset: 1c
      useAnimatedIcons: false,
      animateMainIconOnly: true,
      animatedIconStartDelay: 500,
      showFeelsLikeTemp: true,
      
      forecastLayout: "tiled", // or "table"
      hourlyForecastInterval: 1,
      maxHourliesToShow: 24,
      hourlyExtras: {
        precipitation: true,
        wind: true,
        barometricPressure: false,
        humidity: true,
        dewPoint: false,
        uvIndex: true,
        visibility: false
      },
      maxDailiesToShow: 7,
      dailyExtras: {
        precipitation: true,
        sunrise: false,
        sunset: false,
        wind: true,
        barometricPressure: false,
        humidity: true,
        dewPoint: false,
        uvIndex: true
      },
      label_hourlyTimeFormat: "h:00 a"
    }
  },
  
  /*
  // https://github.com/vicmora/MMM-GoogleMapsTraffic
  {
    module: 'MMM-GoogleMapsTraffic',
    position: 'bottom_right',
    config: {
      key: '',
      lat: 44.641296,
      lng: -63.581156,
      height: '300px',
      width: '300px',
      //zoom: 10,
      styledMapType: "transparent",
      disableDefaultUI: true,
      backgroundColor: 'hsla(0, 0%, 0%, 0)',
      markers: [
        {
          // Home
          lat: 44.6413582,
          lng: -63.5834454,
          fillColor: '#9966ff' // purple
        },
        {
          // 7 Bays Gottingen
          lat: 44.6509476,
          lng: -63.5837353,
          fillColor: '#edf166' // yellow
        },
        {
          // 7 Bays Bayers Lake
          lat: 44.637094,
          lng: -63.6658248,
          fillColor: '#edf166' // yellow
        },
        {
          // My work
          lat: 44.6421024,
          lng: -63.5736845,
          fillColor: '#ff0000' // red
        }
      ],
    },
  },
  */
  
  // https://github.com/matteodanelli/MMM-cryptocurrency
  {
    module: "MMM-cryptocurrency",
    position: "bottom_left",
    config: {
      //apikey: "",
      apidelay: 5,
      currency: ["ethereum", "bitcoin", "polygon", "chainlink", ], // "polkadot", "litecoin"
      conversion: "CAD",
      displayType: "logoWithChanges",
      headers: ["change24h", "change1h", "change7d"],
      showGraphs: true
    },
  },
  
  /*
  // https://github.com/NolanKingdon/MMM-DailyPokemon
  {
    module: "MMM-DailyPokemon",
    position: "bottom_center",
    config: {
      //updateInterval: 600000,
      showType: true,
      grayscale: false,
      minPoke: 1,
      maxPoke: 493,
      stats: true,
      language: "en",
      genera: true,
      gbaMode: true,
      nameSize: 26,
      flavorText: false
    }
  },
  */
  
  // https://github.com/ianperrin/MMM-Formula1
  {
    module: "MMM-Formula1",
    position: "center_left",
    header: "F1 Standings",
    config: {
      type: DRIVER,
      showConstructor; true,
      reloadInterval: 3600000,
      grayscale: false,
      calendar: true,
      fade: false
    }
  },
  
];
