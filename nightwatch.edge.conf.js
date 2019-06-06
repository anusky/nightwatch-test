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
      "log_path": "",
      "port": 4444,
      "cli_args": {
        "webdriver.edge.driver": "edge/MicrosoftWebDriver.exe"
      }
    },
    "test_settings": {
      "default": {
        "selenium_port": 4444,
        "selenium_host": "localhost",

        "desiredCapabilities": {
          "browserName": "MicrosoftEdge",
          "acceptSslCerts": true
        }
      }
    }
  }