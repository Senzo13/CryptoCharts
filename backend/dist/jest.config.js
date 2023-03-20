"use strict";
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    // All imported modules in your tests should be mocked automatically
    // automock: false,
    // Stop running tests after `n` failures
    // bail: 0,
    // The directory where Jest should store its cached dependency information
    // cacheDirectory: "C:\\Users\\lbourlon\\AppData\\Local\\Temp\\jest",
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        "^.+\\.(js|jsx)$": "babel-jest",
    },
    collectCoverageFrom: [
        "src/**/*.{ts,tsx}",
        "!**/node_modules/**"
    ],
    testResultsProcessor: "jest-sonar-reporter",
    // Automatically clear mock calls, instances, contexts and results before every test
    clearMocks: true,
    // Indicates whether the coverage information should be collected while executing the test
    collectCoverage: true,
    // An array of glob patterns indicating a set of files for which coverage information should be collected
    // collectCoverageFrom: undefined,
    // The directory where Jest should output its coverage files
    coverageDirectory: "coverage",
    // An array of regexp pattern strings used to skip coverage collection
    // coveragePathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],
    // Indicates which provider should be used to instrument code for coverage
    coverageProvider: "v8",
    // A list of reporter names that Jest uses when writing coverage reports
    // coverageReporters: [
    //   "json",
    //   "text",
    //   "lcov",
    //   "clover"
    // ],
    // An object that configures minimum threshold enforcement for coverage results
    // coverageThreshold: undefined,
    // A path to a custom dependency extractor
    // dependencyExtractor: undefined,
    // Make calling deprecated APIs throw helpful error messages
    // errorOnDeprecated: false,
    // The default configuration for fake timers
    // fakeTimers: {
    //   "enableGlobally": false
    // },
    // Force coverage collection from ignored files using an array of glob patterns
    // forceCoverageMatch: [],
    // A path to a module which exports an async function that is triggered once before all test suites
    // globalSetup: undefined,
    // A path to a module which exports an async function that is triggered once after all test suites
    // globalTeardown: undefined,
    // A set of global variables that need to be available in all test environments
    // globals: {},
    // The maximum amount of workers used to run your tests. Can be specified as % or a number. E.g. maxWorkers: 10% will use 10% of your CPU amount + 1 as the maximum worker number. maxWorkers: 2 will use a maximum of 2 workers.
    // maxWorkers: "50%",
    // An array of directory names to be searched recursively up from the requiring module's location
    // moduleDirectories: [
    //   "node_modules"
    // ],
    // An array of file extensions your modules use
    // moduleFileExtensions: [
    //   "js",
    //   "mjs",
    //   "cjs",
    //   "jsx",
    //   "ts",
    //   "tsx",
    //   "json",
    //   "node"
    // ],
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    // moduleNameMapper: {},
    // An array of regexp pattern strings, matched against all module paths before considered 'visible' to the module loader
    // modulePathIgnorePatterns: [],
    // Activates notifications for test results
    // notify: false,
    // An enum that specifies notification mode. Requires { notify: true }
    // notifyMode: "failure-change",
    // A preset that is used as a base for Jest's configuration
    // preset: undefined,
    // Run tests from one or more projects
    // projects: undefined,
    // Use this configuration option to add custom reporters to Jest
    // reporters: undefined,
    // Automatically reset mock state before every test
    // resetMocks: false,
    // Reset the module registry before running each individual test
    // resetModules: false,
    // A path to a custom resolver
    // resolver: undefined,
    // Automatically restore mock state and implementation before every test
    // restoreMocks: false,
    // The root directory that Jest should scan for tests and modules within
    // rootDir: undefined,
    // A list of paths to directories that Jest should use to search for files in
    // roots: [
    //   "<rootDir>"
    // ],
    // Allows you to use a custom runner instead of Jest's default test runner
    // runner: "jest-runner",
    // The paths to modules that run some code to configure or set up the testing environment before each test
    // setupFiles: [],
    // A list of paths to modules that run some code to configure or set up the testing framework before each test
    // setupFilesAfterEnv: [],
    // The number of seconds after which a test is considered as slow and reported as such in the results.
    // slowTestThreshold: 5,
    // A list of paths to snapshot serializer modules Jest should use for snapshot testing
    // snapshotSerializers: [],
    // The test environment that will be used for testing
    // testEnvironment: "jest-environment-node",
    // Options that will be passed to the testEnvironment
    // testEnvironmentOptions: {},
    // Adds a location field to test results
    // testLocationInResults: false,
    // The glob patterns Jest uses to detect test files
    // testMatch: [
    //   "**/__tests__/**/*.[jt]s?(x)",
    //   "**/?(*.)+(spec|test).[tj]s?(x)"
    // ],
    // An array of regexp pattern strings that are matched against all test paths, matched tests are skipped
    // testPathIgnorePatterns: [
    //   "\\\\node_modules\\\\"
    // ],
    // The regexp pattern or array of patterns that Jest uses to detect test files
    // testRegex: [],
    // This option allows the use of a custom results processor
    // testResultsProcessor: undefined,
    // This option allows use of a custom test runner
    // testRunner: "jest-circus/runner",
    // A map from regular expressions to paths to transformers
    // transform: undefined,
    // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
    // transformIgnorePatterns: [
    //   "\\\\node_modules\\\\",
    //   "\\.pnp\\.[^\\\\]+$"
    // ],
    // An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them
    // unmockedModulePathPatterns: undefined,
    // Indicates whether each individual test should be reported during the run
    // verbose: undefined,
    // An array of regexp patterns that are matched against all source file paths before re-running tests in watch mode
    // watchPathIgnorePatterns: [],
    // Whether to use watchman for file crawling
    // watchman: true,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9qZXN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHOztBQUlILGtCQUFlO0lBQ2Isb0VBQW9FO0lBQ3BFLG1CQUFtQjtJQUVuQix3Q0FBd0M7SUFDeEMsV0FBVztJQUVYLDBFQUEwRTtJQUMxRSxxRUFBcUU7SUFFckUsTUFBTSxFQUFFLFNBQVM7SUFDakIsU0FBUyxFQUFFO1FBQ1Qsa0JBQWtCLEVBQUUsU0FBUztRQUM3QixpQkFBaUIsRUFBRSxZQUFZO0tBQ2hDO0lBQ0QsbUJBQW1CLEVBQUU7UUFDbkIsbUJBQW1CO1FBQ25CLHFCQUFxQjtLQUN0QjtJQUNELG9CQUFvQixFQUFFLHFCQUFxQjtJQUMzQyxvRkFBb0Y7SUFDcEYsVUFBVSxFQUFFLElBQUk7SUFFaEIsMEZBQTBGO0lBQzFGLGVBQWUsRUFBRSxJQUFJO0lBRXJCLHlHQUF5RztJQUN6RyxrQ0FBa0M7SUFFbEMsNERBQTREO0lBQzVELGlCQUFpQixFQUFFLFVBQVU7SUFFN0Isc0VBQXNFO0lBQ3RFLGdDQUFnQztJQUNoQywyQkFBMkI7SUFDM0IsS0FBSztJQUVMLDBFQUEwRTtJQUMxRSxnQkFBZ0IsRUFBRSxJQUFJO0lBRXRCLHdFQUF3RTtJQUN4RSx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLEtBQUs7SUFFTCwrRUFBK0U7SUFDL0UsZ0NBQWdDO0lBRWhDLDBDQUEwQztJQUMxQyxrQ0FBa0M7SUFFbEMsNERBQTREO0lBQzVELDRCQUE0QjtJQUU1Qiw0Q0FBNEM7SUFDNUMsZ0JBQWdCO0lBQ2hCLDRCQUE0QjtJQUM1QixLQUFLO0lBRUwsK0VBQStFO0lBQy9FLDBCQUEwQjtJQUUxQixtR0FBbUc7SUFDbkcsMEJBQTBCO0lBRTFCLGtHQUFrRztJQUNsRyw2QkFBNkI7SUFFN0IsK0VBQStFO0lBQy9FLGVBQWU7SUFFZixpT0FBaU87SUFDak8scUJBQXFCO0lBRXJCLGlHQUFpRztJQUNqRyx1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLEtBQUs7SUFFTCwrQ0FBK0M7SUFDL0MsMEJBQTBCO0lBQzFCLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFdBQVc7SUFDWCxVQUFVO0lBQ1YsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsS0FBSztJQUVMLG9JQUFvSTtJQUNwSSx3QkFBd0I7SUFFeEIsd0hBQXdIO0lBQ3hILGdDQUFnQztJQUVoQywyQ0FBMkM7SUFDM0MsaUJBQWlCO0lBRWpCLHNFQUFzRTtJQUN0RSxnQ0FBZ0M7SUFFaEMsMkRBQTJEO0lBQzNELHFCQUFxQjtJQUVyQixzQ0FBc0M7SUFDdEMsdUJBQXVCO0lBRXZCLGdFQUFnRTtJQUNoRSx3QkFBd0I7SUFFeEIsbURBQW1EO0lBQ25ELHFCQUFxQjtJQUVyQixnRUFBZ0U7SUFDaEUsdUJBQXVCO0lBRXZCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFFdkIsd0VBQXdFO0lBQ3hFLHVCQUF1QjtJQUV2Qix3RUFBd0U7SUFDeEUsc0JBQXNCO0lBRXRCLDZFQUE2RTtJQUM3RSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLEtBQUs7SUFFTCwwRUFBMEU7SUFDMUUseUJBQXlCO0lBRXpCLDBHQUEwRztJQUMxRyxrQkFBa0I7SUFFbEIsOEdBQThHO0lBQzlHLDBCQUEwQjtJQUUxQixzR0FBc0c7SUFDdEcsd0JBQXdCO0lBRXhCLHNGQUFzRjtJQUN0RiwyQkFBMkI7SUFFM0IscURBQXFEO0lBQ3JELDRDQUE0QztJQUU1QyxxREFBcUQ7SUFDckQsOEJBQThCO0lBRTlCLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFFaEMsbURBQW1EO0lBQ25ELGVBQWU7SUFDZixtQ0FBbUM7SUFDbkMscUNBQXFDO0lBQ3JDLEtBQUs7SUFFTCx3R0FBd0c7SUFDeEcsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQixLQUFLO0lBRUwsOEVBQThFO0lBQzlFLGlCQUFpQjtJQUVqQiwyREFBMkQ7SUFDM0QsbUNBQW1DO0lBRW5DLGlEQUFpRDtJQUNqRCxvQ0FBb0M7SUFFcEMsMERBQTBEO0lBQzFELHdCQUF3QjtJQUl4Qiw0SEFBNEg7SUFDNUgsNkJBQTZCO0lBQzdCLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekIsS0FBSztJQUVMLDZJQUE2STtJQUM3SSx5Q0FBeUM7SUFFekMsMkVBQTJFO0lBQzNFLHNCQUFzQjtJQUV0QixtSEFBbUg7SUFDbkgsK0JBQStCO0lBRS9CLDRDQUE0QztJQUM1QyxrQkFBa0I7Q0FDbkIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEZvciBhIGRldGFpbGVkIGV4cGxhbmF0aW9uIHJlZ2FyZGluZyBlYWNoIGNvbmZpZ3VyYXRpb24gcHJvcGVydHkgYW5kIHR5cGUgY2hlY2ssIHZpc2l0OlxyXG4gKiBodHRwczovL2plc3Rqcy5pby9kb2NzL2NvbmZpZ3VyYXRpb25cclxuICovXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBBbGwgaW1wb3J0ZWQgbW9kdWxlcyBpbiB5b3VyIHRlc3RzIHNob3VsZCBiZSBtb2NrZWQgYXV0b21hdGljYWxseVxyXG4gIC8vIGF1dG9tb2NrOiBmYWxzZSxcclxuXHJcbiAgLy8gU3RvcCBydW5uaW5nIHRlc3RzIGFmdGVyIGBuYCBmYWlsdXJlc1xyXG4gIC8vIGJhaWw6IDAsXHJcblxyXG4gIC8vIFRoZSBkaXJlY3Rvcnkgd2hlcmUgSmVzdCBzaG91bGQgc3RvcmUgaXRzIGNhY2hlZCBkZXBlbmRlbmN5IGluZm9ybWF0aW9uXHJcbiAgLy8gY2FjaGVEaXJlY3Rvcnk6IFwiQzpcXFxcVXNlcnNcXFxcbGJvdXJsb25cXFxcQXBwRGF0YVxcXFxMb2NhbFxcXFxUZW1wXFxcXGplc3RcIixcclxuXHJcbiAgcHJlc2V0OiAndHMtamVzdCcsXHJcbiAgdHJhbnNmb3JtOiB7XHJcbiAgICAnXi4rXFxcXC4odHN8dHN4KT8kJzogJ3RzLWplc3QnLFxyXG4gICAgXCJeLitcXFxcLihqc3xqc3gpJFwiOiBcImJhYmVsLWplc3RcIixcclxuICB9LFxyXG4gIGNvbGxlY3RDb3ZlcmFnZUZyb206IFtcclxuICAgIFwic3JjLyoqLyoue3RzLHRzeH1cIixcclxuICAgIFwiISoqL25vZGVfbW9kdWxlcy8qKlwiXHJcbiAgXSxcclxuICB0ZXN0UmVzdWx0c1Byb2Nlc3NvcjogXCJqZXN0LXNvbmFyLXJlcG9ydGVyXCIsXHJcbiAgLy8gQXV0b21hdGljYWxseSBjbGVhciBtb2NrIGNhbGxzLCBpbnN0YW5jZXMsIGNvbnRleHRzIGFuZCByZXN1bHRzIGJlZm9yZSBldmVyeSB0ZXN0XHJcbiAgY2xlYXJNb2NrczogdHJ1ZSxcclxuXHJcbiAgLy8gSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGNvdmVyYWdlIGluZm9ybWF0aW9uIHNob3VsZCBiZSBjb2xsZWN0ZWQgd2hpbGUgZXhlY3V0aW5nIHRoZSB0ZXN0XHJcbiAgY29sbGVjdENvdmVyYWdlOiB0cnVlLFxyXG5cclxuICAvLyBBbiBhcnJheSBvZiBnbG9iIHBhdHRlcm5zIGluZGljYXRpbmcgYSBzZXQgb2YgZmlsZXMgZm9yIHdoaWNoIGNvdmVyYWdlIGluZm9ybWF0aW9uIHNob3VsZCBiZSBjb2xsZWN0ZWRcclxuICAvLyBjb2xsZWN0Q292ZXJhZ2VGcm9tOiB1bmRlZmluZWQsXHJcblxyXG4gIC8vIFRoZSBkaXJlY3Rvcnkgd2hlcmUgSmVzdCBzaG91bGQgb3V0cHV0IGl0cyBjb3ZlcmFnZSBmaWxlc1xyXG4gIGNvdmVyYWdlRGlyZWN0b3J5OiBcImNvdmVyYWdlXCIsXHJcblxyXG4gIC8vIEFuIGFycmF5IG9mIHJlZ2V4cCBwYXR0ZXJuIHN0cmluZ3MgdXNlZCB0byBza2lwIGNvdmVyYWdlIGNvbGxlY3Rpb25cclxuICAvLyBjb3ZlcmFnZVBhdGhJZ25vcmVQYXR0ZXJuczogW1xyXG4gIC8vICAgXCJcXFxcXFxcXG5vZGVfbW9kdWxlc1xcXFxcXFxcXCJcclxuICAvLyBdLFxyXG5cclxuICAvLyBJbmRpY2F0ZXMgd2hpY2ggcHJvdmlkZXIgc2hvdWxkIGJlIHVzZWQgdG8gaW5zdHJ1bWVudCBjb2RlIGZvciBjb3ZlcmFnZVxyXG4gIGNvdmVyYWdlUHJvdmlkZXI6IFwidjhcIixcclxuXHJcbiAgLy8gQSBsaXN0IG9mIHJlcG9ydGVyIG5hbWVzIHRoYXQgSmVzdCB1c2VzIHdoZW4gd3JpdGluZyBjb3ZlcmFnZSByZXBvcnRzXHJcbiAgLy8gY292ZXJhZ2VSZXBvcnRlcnM6IFtcclxuICAvLyAgIFwianNvblwiLFxyXG4gIC8vICAgXCJ0ZXh0XCIsXHJcbiAgLy8gICBcImxjb3ZcIixcclxuICAvLyAgIFwiY2xvdmVyXCJcclxuICAvLyBdLFxyXG5cclxuICAvLyBBbiBvYmplY3QgdGhhdCBjb25maWd1cmVzIG1pbmltdW0gdGhyZXNob2xkIGVuZm9yY2VtZW50IGZvciBjb3ZlcmFnZSByZXN1bHRzXHJcbiAgLy8gY292ZXJhZ2VUaHJlc2hvbGQ6IHVuZGVmaW5lZCxcclxuXHJcbiAgLy8gQSBwYXRoIHRvIGEgY3VzdG9tIGRlcGVuZGVuY3kgZXh0cmFjdG9yXHJcbiAgLy8gZGVwZW5kZW5jeUV4dHJhY3RvcjogdW5kZWZpbmVkLFxyXG5cclxuICAvLyBNYWtlIGNhbGxpbmcgZGVwcmVjYXRlZCBBUElzIHRocm93IGhlbHBmdWwgZXJyb3IgbWVzc2FnZXNcclxuICAvLyBlcnJvck9uRGVwcmVjYXRlZDogZmFsc2UsXHJcblxyXG4gIC8vIFRoZSBkZWZhdWx0IGNvbmZpZ3VyYXRpb24gZm9yIGZha2UgdGltZXJzXHJcbiAgLy8gZmFrZVRpbWVyczoge1xyXG4gIC8vICAgXCJlbmFibGVHbG9iYWxseVwiOiBmYWxzZVxyXG4gIC8vIH0sXHJcblxyXG4gIC8vIEZvcmNlIGNvdmVyYWdlIGNvbGxlY3Rpb24gZnJvbSBpZ25vcmVkIGZpbGVzIHVzaW5nIGFuIGFycmF5IG9mIGdsb2IgcGF0dGVybnNcclxuICAvLyBmb3JjZUNvdmVyYWdlTWF0Y2g6IFtdLFxyXG5cclxuICAvLyBBIHBhdGggdG8gYSBtb2R1bGUgd2hpY2ggZXhwb3J0cyBhbiBhc3luYyBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCBvbmNlIGJlZm9yZSBhbGwgdGVzdCBzdWl0ZXNcclxuICAvLyBnbG9iYWxTZXR1cDogdW5kZWZpbmVkLFxyXG5cclxuICAvLyBBIHBhdGggdG8gYSBtb2R1bGUgd2hpY2ggZXhwb3J0cyBhbiBhc3luYyBmdW5jdGlvbiB0aGF0IGlzIHRyaWdnZXJlZCBvbmNlIGFmdGVyIGFsbCB0ZXN0IHN1aXRlc1xyXG4gIC8vIGdsb2JhbFRlYXJkb3duOiB1bmRlZmluZWQsXHJcblxyXG4gIC8vIEEgc2V0IG9mIGdsb2JhbCB2YXJpYWJsZXMgdGhhdCBuZWVkIHRvIGJlIGF2YWlsYWJsZSBpbiBhbGwgdGVzdCBlbnZpcm9ubWVudHNcclxuICAvLyBnbG9iYWxzOiB7fSxcclxuXHJcbiAgLy8gVGhlIG1heGltdW0gYW1vdW50IG9mIHdvcmtlcnMgdXNlZCB0byBydW4geW91ciB0ZXN0cy4gQ2FuIGJlIHNwZWNpZmllZCBhcyAlIG9yIGEgbnVtYmVyLiBFLmcuIG1heFdvcmtlcnM6IDEwJSB3aWxsIHVzZSAxMCUgb2YgeW91ciBDUFUgYW1vdW50ICsgMSBhcyB0aGUgbWF4aW11bSB3b3JrZXIgbnVtYmVyLiBtYXhXb3JrZXJzOiAyIHdpbGwgdXNlIGEgbWF4aW11bSBvZiAyIHdvcmtlcnMuXHJcbiAgLy8gbWF4V29ya2VyczogXCI1MCVcIixcclxuXHJcbiAgLy8gQW4gYXJyYXkgb2YgZGlyZWN0b3J5IG5hbWVzIHRvIGJlIHNlYXJjaGVkIHJlY3Vyc2l2ZWx5IHVwIGZyb20gdGhlIHJlcXVpcmluZyBtb2R1bGUncyBsb2NhdGlvblxyXG4gIC8vIG1vZHVsZURpcmVjdG9yaWVzOiBbXHJcbiAgLy8gICBcIm5vZGVfbW9kdWxlc1wiXHJcbiAgLy8gXSxcclxuXHJcbiAgLy8gQW4gYXJyYXkgb2YgZmlsZSBleHRlbnNpb25zIHlvdXIgbW9kdWxlcyB1c2VcclxuICAvLyBtb2R1bGVGaWxlRXh0ZW5zaW9uczogW1xyXG4gIC8vICAgXCJqc1wiLFxyXG4gIC8vICAgXCJtanNcIixcclxuICAvLyAgIFwiY2pzXCIsXHJcbiAgLy8gICBcImpzeFwiLFxyXG4gIC8vICAgXCJ0c1wiLFxyXG4gIC8vICAgXCJ0c3hcIixcclxuICAvLyAgIFwianNvblwiLFxyXG4gIC8vICAgXCJub2RlXCJcclxuICAvLyBdLFxyXG5cclxuICAvLyBBIG1hcCBmcm9tIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdG8gbW9kdWxlIG5hbWVzIG9yIHRvIGFycmF5cyBvZiBtb2R1bGUgbmFtZXMgdGhhdCBhbGxvdyB0byBzdHViIG91dCByZXNvdXJjZXMgd2l0aCBhIHNpbmdsZSBtb2R1bGVcclxuICAvLyBtb2R1bGVOYW1lTWFwcGVyOiB7fSxcclxuXHJcbiAgLy8gQW4gYXJyYXkgb2YgcmVnZXhwIHBhdHRlcm4gc3RyaW5ncywgbWF0Y2hlZCBhZ2FpbnN0IGFsbCBtb2R1bGUgcGF0aHMgYmVmb3JlIGNvbnNpZGVyZWQgJ3Zpc2libGUnIHRvIHRoZSBtb2R1bGUgbG9hZGVyXHJcbiAgLy8gbW9kdWxlUGF0aElnbm9yZVBhdHRlcm5zOiBbXSxcclxuXHJcbiAgLy8gQWN0aXZhdGVzIG5vdGlmaWNhdGlvbnMgZm9yIHRlc3QgcmVzdWx0c1xyXG4gIC8vIG5vdGlmeTogZmFsc2UsXHJcblxyXG4gIC8vIEFuIGVudW0gdGhhdCBzcGVjaWZpZXMgbm90aWZpY2F0aW9uIG1vZGUuIFJlcXVpcmVzIHsgbm90aWZ5OiB0cnVlIH1cclxuICAvLyBub3RpZnlNb2RlOiBcImZhaWx1cmUtY2hhbmdlXCIsXHJcblxyXG4gIC8vIEEgcHJlc2V0IHRoYXQgaXMgdXNlZCBhcyBhIGJhc2UgZm9yIEplc3QncyBjb25maWd1cmF0aW9uXHJcbiAgLy8gcHJlc2V0OiB1bmRlZmluZWQsXHJcblxyXG4gIC8vIFJ1biB0ZXN0cyBmcm9tIG9uZSBvciBtb3JlIHByb2plY3RzXHJcbiAgLy8gcHJvamVjdHM6IHVuZGVmaW5lZCxcclxuXHJcbiAgLy8gVXNlIHRoaXMgY29uZmlndXJhdGlvbiBvcHRpb24gdG8gYWRkIGN1c3RvbSByZXBvcnRlcnMgdG8gSmVzdFxyXG4gIC8vIHJlcG9ydGVyczogdW5kZWZpbmVkLFxyXG5cclxuICAvLyBBdXRvbWF0aWNhbGx5IHJlc2V0IG1vY2sgc3RhdGUgYmVmb3JlIGV2ZXJ5IHRlc3RcclxuICAvLyByZXNldE1vY2tzOiBmYWxzZSxcclxuXHJcbiAgLy8gUmVzZXQgdGhlIG1vZHVsZSByZWdpc3RyeSBiZWZvcmUgcnVubmluZyBlYWNoIGluZGl2aWR1YWwgdGVzdFxyXG4gIC8vIHJlc2V0TW9kdWxlczogZmFsc2UsXHJcblxyXG4gIC8vIEEgcGF0aCB0byBhIGN1c3RvbSByZXNvbHZlclxyXG4gIC8vIHJlc29sdmVyOiB1bmRlZmluZWQsXHJcblxyXG4gIC8vIEF1dG9tYXRpY2FsbHkgcmVzdG9yZSBtb2NrIHN0YXRlIGFuZCBpbXBsZW1lbnRhdGlvbiBiZWZvcmUgZXZlcnkgdGVzdFxyXG4gIC8vIHJlc3RvcmVNb2NrczogZmFsc2UsXHJcblxyXG4gIC8vIFRoZSByb290IGRpcmVjdG9yeSB0aGF0IEplc3Qgc2hvdWxkIHNjYW4gZm9yIHRlc3RzIGFuZCBtb2R1bGVzIHdpdGhpblxyXG4gIC8vIHJvb3REaXI6IHVuZGVmaW5lZCxcclxuXHJcbiAgLy8gQSBsaXN0IG9mIHBhdGhzIHRvIGRpcmVjdG9yaWVzIHRoYXQgSmVzdCBzaG91bGQgdXNlIHRvIHNlYXJjaCBmb3IgZmlsZXMgaW5cclxuICAvLyByb290czogW1xyXG4gIC8vICAgXCI8cm9vdERpcj5cIlxyXG4gIC8vIF0sXHJcblxyXG4gIC8vIEFsbG93cyB5b3UgdG8gdXNlIGEgY3VzdG9tIHJ1bm5lciBpbnN0ZWFkIG9mIEplc3QncyBkZWZhdWx0IHRlc3QgcnVubmVyXHJcbiAgLy8gcnVubmVyOiBcImplc3QtcnVubmVyXCIsXHJcblxyXG4gIC8vIFRoZSBwYXRocyB0byBtb2R1bGVzIHRoYXQgcnVuIHNvbWUgY29kZSB0byBjb25maWd1cmUgb3Igc2V0IHVwIHRoZSB0ZXN0aW5nIGVudmlyb25tZW50IGJlZm9yZSBlYWNoIHRlc3RcclxuICAvLyBzZXR1cEZpbGVzOiBbXSxcclxuXHJcbiAgLy8gQSBsaXN0IG9mIHBhdGhzIHRvIG1vZHVsZXMgdGhhdCBydW4gc29tZSBjb2RlIHRvIGNvbmZpZ3VyZSBvciBzZXQgdXAgdGhlIHRlc3RpbmcgZnJhbWV3b3JrIGJlZm9yZSBlYWNoIHRlc3RcclxuICAvLyBzZXR1cEZpbGVzQWZ0ZXJFbnY6IFtdLFxyXG5cclxuICAvLyBUaGUgbnVtYmVyIG9mIHNlY29uZHMgYWZ0ZXIgd2hpY2ggYSB0ZXN0IGlzIGNvbnNpZGVyZWQgYXMgc2xvdyBhbmQgcmVwb3J0ZWQgYXMgc3VjaCBpbiB0aGUgcmVzdWx0cy5cclxuICAvLyBzbG93VGVzdFRocmVzaG9sZDogNSxcclxuXHJcbiAgLy8gQSBsaXN0IG9mIHBhdGhzIHRvIHNuYXBzaG90IHNlcmlhbGl6ZXIgbW9kdWxlcyBKZXN0IHNob3VsZCB1c2UgZm9yIHNuYXBzaG90IHRlc3RpbmdcclxuICAvLyBzbmFwc2hvdFNlcmlhbGl6ZXJzOiBbXSxcclxuXHJcbiAgLy8gVGhlIHRlc3QgZW52aXJvbm1lbnQgdGhhdCB3aWxsIGJlIHVzZWQgZm9yIHRlc3RpbmdcclxuICAvLyB0ZXN0RW52aXJvbm1lbnQ6IFwiamVzdC1lbnZpcm9ubWVudC1ub2RlXCIsXHJcblxyXG4gIC8vIE9wdGlvbnMgdGhhdCB3aWxsIGJlIHBhc3NlZCB0byB0aGUgdGVzdEVudmlyb25tZW50XHJcbiAgLy8gdGVzdEVudmlyb25tZW50T3B0aW9uczoge30sXHJcblxyXG4gIC8vIEFkZHMgYSBsb2NhdGlvbiBmaWVsZCB0byB0ZXN0IHJlc3VsdHNcclxuICAvLyB0ZXN0TG9jYXRpb25JblJlc3VsdHM6IGZhbHNlLFxyXG5cclxuICAvLyBUaGUgZ2xvYiBwYXR0ZXJucyBKZXN0IHVzZXMgdG8gZGV0ZWN0IHRlc3QgZmlsZXNcclxuICAvLyB0ZXN0TWF0Y2g6IFtcclxuICAvLyAgIFwiKiovX190ZXN0c19fLyoqLyouW2p0XXM/KHgpXCIsXHJcbiAgLy8gICBcIioqLz8oKi4pKyhzcGVjfHRlc3QpLlt0al1zPyh4KVwiXHJcbiAgLy8gXSxcclxuXHJcbiAgLy8gQW4gYXJyYXkgb2YgcmVnZXhwIHBhdHRlcm4gc3RyaW5ncyB0aGF0IGFyZSBtYXRjaGVkIGFnYWluc3QgYWxsIHRlc3QgcGF0aHMsIG1hdGNoZWQgdGVzdHMgYXJlIHNraXBwZWRcclxuICAvLyB0ZXN0UGF0aElnbm9yZVBhdHRlcm5zOiBbXHJcbiAgLy8gICBcIlxcXFxcXFxcbm9kZV9tb2R1bGVzXFxcXFxcXFxcIlxyXG4gIC8vIF0sXHJcblxyXG4gIC8vIFRoZSByZWdleHAgcGF0dGVybiBvciBhcnJheSBvZiBwYXR0ZXJucyB0aGF0IEplc3QgdXNlcyB0byBkZXRlY3QgdGVzdCBmaWxlc1xyXG4gIC8vIHRlc3RSZWdleDogW10sXHJcblxyXG4gIC8vIFRoaXMgb3B0aW9uIGFsbG93cyB0aGUgdXNlIG9mIGEgY3VzdG9tIHJlc3VsdHMgcHJvY2Vzc29yXHJcbiAgLy8gdGVzdFJlc3VsdHNQcm9jZXNzb3I6IHVuZGVmaW5lZCxcclxuXHJcbiAgLy8gVGhpcyBvcHRpb24gYWxsb3dzIHVzZSBvZiBhIGN1c3RvbSB0ZXN0IHJ1bm5lclxyXG4gIC8vIHRlc3RSdW5uZXI6IFwiamVzdC1jaXJjdXMvcnVubmVyXCIsXHJcblxyXG4gIC8vIEEgbWFwIGZyb20gcmVndWxhciBleHByZXNzaW9ucyB0byBwYXRocyB0byB0cmFuc2Zvcm1lcnNcclxuICAvLyB0cmFuc2Zvcm06IHVuZGVmaW5lZCxcclxuXHJcblxyXG5cclxuICAvLyBBbiBhcnJheSBvZiByZWdleHAgcGF0dGVybiBzdHJpbmdzIHRoYXQgYXJlIG1hdGNoZWQgYWdhaW5zdCBhbGwgc291cmNlIGZpbGUgcGF0aHMsIG1hdGNoZWQgZmlsZXMgd2lsbCBza2lwIHRyYW5zZm9ybWF0aW9uXHJcbiAgLy8gdHJhbnNmb3JtSWdub3JlUGF0dGVybnM6IFtcclxuICAvLyAgIFwiXFxcXFxcXFxub2RlX21vZHVsZXNcXFxcXFxcXFwiLFxyXG4gIC8vICAgXCJcXFxcLnBucFxcXFwuW15cXFxcXFxcXF0rJFwiXHJcbiAgLy8gXSxcclxuXHJcbiAgLy8gQW4gYXJyYXkgb2YgcmVnZXhwIHBhdHRlcm4gc3RyaW5ncyB0aGF0IGFyZSBtYXRjaGVkIGFnYWluc3QgYWxsIG1vZHVsZXMgYmVmb3JlIHRoZSBtb2R1bGUgbG9hZGVyIHdpbGwgYXV0b21hdGljYWxseSByZXR1cm4gYSBtb2NrIGZvciB0aGVtXHJcbiAgLy8gdW5tb2NrZWRNb2R1bGVQYXRoUGF0dGVybnM6IHVuZGVmaW5lZCxcclxuXHJcbiAgLy8gSW5kaWNhdGVzIHdoZXRoZXIgZWFjaCBpbmRpdmlkdWFsIHRlc3Qgc2hvdWxkIGJlIHJlcG9ydGVkIGR1cmluZyB0aGUgcnVuXHJcbiAgLy8gdmVyYm9zZTogdW5kZWZpbmVkLFxyXG5cclxuICAvLyBBbiBhcnJheSBvZiByZWdleHAgcGF0dGVybnMgdGhhdCBhcmUgbWF0Y2hlZCBhZ2FpbnN0IGFsbCBzb3VyY2UgZmlsZSBwYXRocyBiZWZvcmUgcmUtcnVubmluZyB0ZXN0cyBpbiB3YXRjaCBtb2RlXHJcbiAgLy8gd2F0Y2hQYXRoSWdub3JlUGF0dGVybnM6IFtdLFxyXG5cclxuICAvLyBXaGV0aGVyIHRvIHVzZSB3YXRjaG1hbiBmb3IgZmlsZSBjcmF3bGluZ1xyXG4gIC8vIHdhdGNobWFuOiB0cnVlLFxyXG59O1xyXG4iXX0=