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

Always make sure that `jest`, `babel-jest`, `ts-jest`, and `jest-circus` have at least the **same major version** to keep your tests running

```
    "jest": "^26.6.3",
    "jest-circus": "^26.6.3",
    "ts-jest": "^26.5.6",
    "babel-jest": "^26.6.3",
```
