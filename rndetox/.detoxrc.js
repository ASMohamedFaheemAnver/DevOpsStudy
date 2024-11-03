/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      $0: 'jest',
      config: 'e2e/jest.config.js',
    },
    jest: {
      setupTimeout: 120000,
    },
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/rndetox.app',
      build:
        'xcodebuild -workspace ios/rndetox.xcworkspace -scheme rndetox -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath:
        'ios/build/Build/Products/Release-iphonesimulator/rndetox.app',
      build:
        'xcodebuild -workspace ios/rndetox.xcworkspace -scheme rndetox -configuration Release -sdk iphonesimulator -derivedDataPath ios/build',
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      // testBinaryPath:
      //   'android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      build:
        'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [8081],
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build:
        'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
      // testBinaryPath:
      //   'android/app/build/outputs/apk/androidTest/release/app-release-androidTest.apk',
    },
    'android.release.cloud': {
      type: 'android.cloud',
      app: 'bs://03e999a1565cff20f8fc62b300bc5a322639bc53',
      appClient: 'bs://76e9f0beaf7583be88d847b9509eb53179812285',
    },
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 15',
      },
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*',
      },
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_7_API_32',
      },
    },
    androidCloud: {
      type: 'android.cloud',
      device: {
        name: 'Samsung Galaxy S21 Plus',
        osVersion: '11.0',
      },
    },
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug',
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release',
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug',
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release',
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug',
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release',
    },
    'android.cloud.release': {
      device: 'androidCloud',
      app: 'android.release.cloud',
      cloudAuthentication: {
        username: process.env.BROWSER_STACK_USERNAME,
        accessKey: process.env.BROWSER_STACK_ACCESSKEY,
      },
      session: {
        server: 'wss://detox.browserstack.com/init',
      },
    },
  },
};
