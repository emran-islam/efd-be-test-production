/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  verbose: true,
  testEnvironment: "node",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js"],
  testMatch: ["**/?(*.)+(spec|test).ts?(x)"],
};
