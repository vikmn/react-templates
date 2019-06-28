module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:@typescript-eslint/recommended',
        'react-app'
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser":"@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint"
    ],
    "rules": {
        
    }
};