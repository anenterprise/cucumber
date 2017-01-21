$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Action",
  "description": "",
  "id": "login-action",
  "keyword": "Feature"
});
formatter.before({
  "duration": 264269,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 230303344,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "login-action;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "User is on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "User Navigate to LogIn Page",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User enters Credentials to LogIn",
  "rows": [
    {
      "cells": [
        "testuser_1",
        "Test@153"
      ],
      "line": 9
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Message displayed Login Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Step.user_is_on_Home_Page()"
});
formatter.result({
  "duration": 13640758086,
  "status": "passed"
});
formatter.match({
  "location": "Test_Step.user_Navigate_to_LogIn_Page()"
});
formatter.result({
  "duration": 10060488280,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027account\u0027]/a\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.05 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ganthimani\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\eminence\\AppData\\Local\\Temp\\scoped_dir7972_1077}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bca17b3c89b41332512a037d6d3ead9a\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027account\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat test.features.Test_Step.user_Navigate_to_LogIn_Page(Test_Step.java:40)\r\n\tat ✽.When User Navigate to LogIn Page(Login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Test_Step.user_enters_testuser__and_Test(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Test_Step.message_displayed_Login_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 51800,
  "status": "passed"
});
formatter.before({
  "duration": 102429,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 65262,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Successful LogOut",
  "description": "",
  "id": "login-action;successful-logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 11,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 13,
  "name": "User LogOut from the Application",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Message displayed LogOut Successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "Test_Step.user_LogOut_from_the_Application()"
});
formatter.result({
  "duration": 10055991614,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\".//*[@id\u003d\u0027account_logout\u0027]/a\"}\n  (Session info: chrome\u003d55.0.2883.87)\n  (Driver info: chromedriver\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed),platform\u003dWindows NT 10.0.14393 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 10.06 seconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.0.1\u0027, revision: \u00271969d75\u0027, time: \u00272016-10-18 09:49:13 -0700\u0027\nSystem info: host: \u0027Ganthimani\u0027, ip: \u0027192.168.1.5\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_101\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, mobileEmulationEnabled\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d2.25.426923 (0390b88869384d6eb0d5d09729679f934aab9eed), userDataDir\u003dC:\\Users\\eminence\\AppData\\Local\\Temp\\scoped_dir7972_1077}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, hasTouchScreen\u003dfalse, version\u003d55.0.2883.87, platform\u003dXP, browserConnectionEnabled\u003dfalse, nativeEvents\u003dtrue, acceptSslCerts\u003dtrue, locationContextEnabled\u003dtrue, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue}]\nSession ID: bca17b3c89b41332512a037d6d3ead9a\n*** Element info: {Using\u003dxpath, value\u003d.//*[@id\u003d\u0027account_logout\u0027]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:216)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:168)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:635)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:368)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:360)\r\n\tat test.features.Test_Step.user_LogOut_from_the_Application(Test_Step.java:58)\r\n\tat ✽.When User LogOut from the Application(Login.feature:13)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "Test_Step.message_displayed_LogOut_Successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 77846,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Create Login",
  "description": "",
  "id": "login-action;create-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter username\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter password\"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter title\"\u003ctitle\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "press submit",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "login-action;create-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "title"
      ],
      "line": 25,
      "id": "login-action;create-login;;1"
    },
    {
      "cells": [
        "Rob",
        "xyz1",
        "title1"
      ],
      "line": 26,
      "id": "login-action;create-login;;2"
    },
    {
      "cells": [
        "Bob",
        "xyz1",
        "title2"
      ],
      "line": 27,
      "id": "login-action;create-login;;3"
    },
    {
      "cells": [
        "Rob",
        "xyz1",
        "title1"
      ],
      "line": 28,
      "id": "login-action;create-login;;4"
    },
    {
      "cells": [
        "Bob",
        "xyz1",
        "title2"
      ],
      "line": 29,
      "id": "login-action;create-login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 59995,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 57945,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Create Login",
  "description": "",
  "id": "login-action;create-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter username\"Rob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter password\"xyz1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter title\"title1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "press submit",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 50922,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rob",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_username(String)"
});
formatter.result({
  "duration": 3543777,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_password(String)"
});
formatter.result({
  "duration": 109454,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 14
    }
  ],
  "location": "Test_Step.abc(String)"
});
formatter.result({
  "duration": 112380,
  "status": "passed"
});
formatter.match({
  "location": "Test_Step.submit()"
});
formatter.result({
  "duration": 87505,
  "status": "passed"
});
formatter.after({
  "duration": 35411,
  "status": "passed"
});
formatter.before({
  "duration": 63213,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 56483,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Create Login",
  "description": "",
  "id": "login-action;create-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter username\"Bob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter password\"xyz1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter title\"title2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "press submit",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 47995,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_username(String)"
});
formatter.result({
  "duration": 72579,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_password(String)"
});
formatter.result({
  "duration": 79018,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 14
    }
  ],
  "location": "Test_Step.abc(String)"
});
formatter.result({
  "duration": 96284,
  "status": "passed"
});
formatter.match({
  "location": "Test_Step.submit()"
});
formatter.result({
  "duration": 38631,
  "status": "passed"
});
formatter.after({
  "duration": 67018,
  "status": "passed"
});
formatter.before({
  "duration": 43898,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 82529,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Create Login",
  "description": "",
  "id": "login-action;create-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter username\"Rob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter password\"xyz1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter title\"title1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "press submit",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 57361,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rob",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_username(String)"
});
formatter.result({
  "duration": 113258,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_password(String)"
});
formatter.result({
  "duration": 93943,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title1",
      "offset": 14
    }
  ],
  "location": "Test_Step.abc(String)"
});
formatter.result({
  "duration": 74920,
  "status": "passed"
});
formatter.match({
  "location": "Test_Step.submit()"
});
formatter.result({
  "duration": 32485,
  "status": "passed"
});
formatter.after({
  "duration": 28680,
  "status": "passed"
});
formatter.before({
  "duration": 64092,
  "status": "passed"
});
formatter.background({
  "line": 2,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 3,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 77261,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Create Login",
  "description": "",
  "id": "login-action;create-login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@Run"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "I open the application",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I enter username\"Bob\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "I enter password\"xyz1\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I enter title\"title2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 23,
  "name": "press submit",
  "keyword": "And "
});
formatter.match({
  "location": "Test_Step.home()"
});
formatter.result({
  "duration": 47118,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bob",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_username(String)"
});
formatter.result({
  "duration": 83699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz1",
      "offset": 17
    }
  ],
  "location": "Test_Step.I_enter_password(String)"
});
formatter.result({
  "duration": 84285,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "title2",
      "offset": 14
    }
  ],
  "location": "Test_Step.abc(String)"
});
formatter.result({
  "duration": 88968,
  "status": "passed"
});
formatter.match({
  "location": "Test_Step.submit()"
});
formatter.result({
  "duration": 33363,
  "status": "passed"
});
formatter.after({
  "duration": 25168,
  "status": "passed"
});
});