<p align="center" width="100%">
  <image src="https://user-images.githubusercontent.com/10791201/194711903-8f64a523-c1e7-4f42-a87f-fc2965409ac7.png" style="width:300px" alt="logo" />
</p>

## Turbo Pancake

A React Native starter template on Steroids

Features:

- pnpm
- Typescript
- `rnx-kit` for keeping the core libraries updated
- `jest` test runner
- `testing-library/native` for unit testing
- Detox for end-to-end testing

## Dependencies

The dependencies are currently managed with `rnx-dep-check` through `pnpm check-dependencies` and `pnpm fix-dependencies` command. However, some core libraries like `ts-jest`, `jest-circus`, `babel-jest` do not rely yet on this tool and thus cannot be added o `rnx-dep-check`'s `capabilities`.

Always make sure that `jest`, `babel-jest`, `ts-jest`, and `jest-circus` have at least the **same major version** to keep your tests running properly

```
    "jest": "^26.6.3",
    "jest-circus": "^26.6.3",
    "ts-jest": "^26.5.6",
    "babel-jest": "^26.6.3",
```

## Detox Testing

> **NOTE:** As of Oct 2022 at the time of this writing, a more comprehensive [blog](https://medium.com/wix-engineering/how-to-execute-android-ui-tests-on-ci-and-stay-alive-eb9089d88c1f) has been released by the Detox team outlining the steps written in their official documentation. Feel free to go through it and learn a thing or two about CI/CD. Nonetheless, any missing details that I know of to run the tests successfully based from their official documentation has already been covered here and pre-configured by me.

The detox config can be found in `.detoxrc.json` with the following config names

- `ios.sim.debug`
- `ios.sim.release`
- `android.emu.debug`
- `android.emu.release`

Commands:

```
# only run this once whenever .detoxrc.json is updated
detox build --configuration <config.name>
detox test  --configration <config.name>
```

Example:

```
detox test --configuration android.emu.debug
```

### Emulators

The `devices` are specified in `.detoxrc.json`. Update them as necessary according to your desktop or CI/CD setup. My `devices` defaults are:

- `iPhone 11`
- `Pixel_6_Pro_API_29_AOSP`

Run the ff commands to list all emulators/simulators installed in your machine:

```
# iOS Simulators
xcrun simctl list

# Android Emulators
emulator -list-avds
```

#### iOS

For iOS to work properly, it is necessary to **manually launch** the package manager via `pnpm start` as well as the simulator via `open -a Simulator.app` so that the app can be injected.

#### Android

No need to manually start the package manager and launch Android Emulator as long as it's been configured properly.
[Test Butler](https://github.com/linkedin/test-butler) has been setup to be installed by default through Jest. [Read more](https://wix.github.io/Detox/docs/introduction/android)

### Writing End-to-End Tests

[Detox Recorder](https://github.com/wix/DetoxRecorder) has been installed as a dev dependency although I haven't tested them yet personally as I plan to do [Test-Driven Development](https://en.wikipedia.org/wiki/Test-driven_development) with Detox

See the official detox [docs](https://wix.github.io/Detox/docs/api/matchers) for the API
