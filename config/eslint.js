module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "no-underscore-dangle": "off",
        "class-methods-use-this": "off",
    //     "no-param-reassign": "off"
    //     "prefer-destructuring": "off"
    },
    "env": {
        "jest/globals": true
    },
    "plugins": ["jest"]
};
