'use strict';

module.exports = {
    env: {
        mocha: true,
        jasmine: true,
        jquery: true,
        browser: true,
        commonjs: true,
        es6: true
    },
    globals: {
        angular: true,
        sinon: true,
        module: true,
        inject: true
    },
    parserOptions: {
        ecmaVersion: 6
    },
    rules: {
        'no-bitwise': 0,
        'arrow-parens': 2,
        curly: [2, "all"],
        eqeqeq: 2,
        'no-use-before-define': [2, {
            functions: false
        }],
        'no-caller': 2,
        'no-undef': 2,
        "no-unused-vars": 2,
        'new-cap': 0,
        strict: [2, "global"],
        'no-restricted-syntax': [2, "WithStatement", "ExportDefaultDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration", "ExportSpecifier", "ImportDeclaration", "ImportSpecifier", "ImportDefaultSpecifier", "ImportNamespaceSpecifier"],
        'no-empty': [2, {
            "allowEmptyCatch": true
        }],
        'no-var': 2,
        'func-style': [2, "expression"],
        'no-implicit-coercion': [2, {
            boolean: true,
            string: true,
            number: true
        }],
        'brace-style': [2, "1tbs", {
            "allowSingleLine": true
        }],
        'no-with': 0,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-str': 2,
        'dot-location': [2, "property"],
        'operator-linebreak': [2, "after"],
        'padded-blocks': [2, "never"],
        'quote-props': [2, "as-needed"],
        'key-spacing': [2, {
            align: "colon",
            afterColon: true
        }],
        'space-unary-ops': [2, {
            words: false,
            nonwords: false
        }],
        'comma-spacing': [2, {
            before: false,
            after: true
        }],
        'semi-spacing': [2, {
            before: false,
            after: true
        }],
        'no-spaced-func': 2,
        'space-before-function-paren': [2, "never"],
        'array-bracket-spacing': [2, "never", {}],
        'comma-dangle': [2, "never"],
        'no-trailing-spaces': 2,
        'valid-jsdoc': 0,
        'camelcase': 0,
        'comma-style': [2, "last"],
        'dot-notation': [2, {
            allowKeywords: true
        }],
        'newline-before-return': "error",
        'wrap-iife': 2,
        semi: [2, "always"],
        'space-infix-ops': 2,
        'keyword-spacing': [2, {
            overrides: {
                else: {
                    before: true
                },
                while: {
                    before: true
                },
                catch: {
                    before: true
                }
            }
        }],
        'space-before-blocks': [2, "always"],
        'consistent-this': [2, "self"],
        quotes: [2, "single"],
        'prefer-const': 1,
        'prefer-template': 1,
        'template-curly-spacing': 2,
        'indent': ['error', 2],
        'eol-last': 2,
        'no-multiple-empty-lines': ["error", {
            "max": 2,
            "maxEOF": 0
        }]
    }
};

