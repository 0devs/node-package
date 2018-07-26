module.exports = {
    verbose: true,
    transform: {
        "^.+\\.jsx?$": "babel-jest"
    },
    "collectCoverage": true,
    "collectCoverageFrom": [
        "**/src/**/*.js"
    ]
};