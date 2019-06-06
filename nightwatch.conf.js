const seleniumServer = require("selenium-server");
const chromedriver = require("chromedriver");
const geckodriver = require("geckodriver");
module.exports =
  {
    "src_folders": ["./tests"],
    "output_folder": "./reports",

    "webdriver": {
      "start_process": true
    },
    "selenium": {
      "start_process": true,
      "server_path": seleniumServer.path,
      "port": 4444, //default
      "cli_args": {
        'webdriver.gecko.driver': 'edge/geckodriver.exe',
        'webdriver.chrome.driver': chromedriver.path,
        "webdriver.edge.driver": "edge/MicrosoftWebDriver.exe"
      },
    },

    "test_settings": {
      "default": {
        selenium_port: 4444,
        selenium_host: 'localhost',
        "desiredCapabilities": {
          "browserName": "chrome",
          "acceptSslCerts": true
        }
      },
      "chrome": {
        desiredCapabilities: {
          browserName: 'chrome',
          javascriptEnabled: true,
          acceptSslCerts: true,
        },
      },
      "firefox": {
        desiredCapabilities: {
          browserName: 'firefox',
          javascriptEnabled: true,
          acceptSslCerts: true,
        },
      }
    }
  }
// module.exports =
//   {
//     "src_folders": ["./tests"],
//     "output_folder": "./reports",

//     "webdriver": {
//       "start_process": true
//     },

//     "test_settings": {
//       "default": {
//         "webdriver": {
//           "server_path": geckodriver.path,
//           "port": 4444,
//           "cli_args": [
//             "--log", "debug"
//           ]
//         },
//         "desiredCapabilities": {
//           "browserName": "firefox",
//           "acceptInsecureCerts": true
//         }
//       },

//       "chrome": {
//         "screenshots": {
//           "enabled": true, // if you want to keep screenshots
//           "path": './screenshots' // save screenshots here
//         },
//         "webdriver": {
//           "port": 9515,
//           "server_path": chromedriver.path,
//           "cli_args": [
//             "--verbose"
//           ]
//         },

//         "desiredCapabilities": {
//           "browserName": "chrome",
//           "loggingPrefs": {
//             "driver": "INFO",
//             "server": "OFF",
//             "browser": "INFO"
//           }
//         }
//       },

//       "firefox": {
//         "selenium": {
//           "start_process": true,
//           "host": "localhost",
//           "server_path": seleniumServer.path,
//           "cli_args": {
//             "webdriver.gecko.driver": geckodriver.path
//           }
//         },

//         "desiredCapabilities": {
//           "browserName": "firefox",
//           "acceptSslCerts": true
//         }
//       }
//     }
//   }