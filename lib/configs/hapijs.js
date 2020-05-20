'use strict';

module.exports = {
    env: {
        mocha: true,
        node: true,
        es6: true
    },
    globals: {
        angular: true,
        io: false,
        ApplicationConfiguration: true
    },
    parserOptions: {
        ecmaVersion: 2018
    },
    extends: 'eslint:recommended',
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
        'prefer-const': 2,
        'func-style': [2, "expression"],
        'func-names': [2, "as-needed"],
        'require-await': 2,
        'no-await-in-loop': 2,
        'require-atomic-updates': 2,
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
        'eol-last': 2,
        'no-multiple-empty-lines': ["error", {
            "max": 2,
            "maxEOF": 0
        }],
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
        'indent': [2, 4, {
            SwitchCase: 1
        }],
        quotes: [2, "single"],
        'array-callback-return': [2],
    }
};
