function getOpts() {
  let desiredCapabilities;
  if (process.env.PLATFORM === 'android') {
    desiredCapabilities = {
      platformName: 'Android',
      deviceName: 'Android Emulator'
    };
  } else {
    desiredCapabilities = {
      platformName: 'iOS',
      deviceName: 'iPhone 8',
      automationName: 'XCUITest'
    };
  }
  desiredCapabilities.app = process.env.APP;
  desiredCapabilities.platformVersion = process.env.VERSION;
  desiredCapabilities.fullReset = true;
  return { port: 4723, desiredCapabilities };
}

module.exports = getOpts;