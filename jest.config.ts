export default {
  preset: "react-native",
  globals: {
    "ts-jest": {
      babelConfig: true,
    },
  },
  transform: {
    "^.+\\.jsx$": "babel-jest",
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "tsconfig.json",
      },
    ],
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  moduleNameMapper: {},
  transformIgnorePatterns: [],
}
