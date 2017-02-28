# eslint-plugin-xogroup

eslinting plugin ruleset and configuration defaults for the XO Group JS environment

[![npm version](https://badge.fury.io/js/eslint-plugin-xogroup.svg)](https://badge.fury.io/js/eslint-plugin-xogroup)
[![Build Status](https://travis-ci.org/xogroup/eslint-plugin-xogroup.svg?branch=master)](https://travis-ci.org/xogroup/eslint-plugin-xogroup)

[![Known Vulnerabilities](https://snyk.io/test/github/xogroup/eslint-plugin-xogroup/badge.svg)](https://snyk.io/test/github/xogroup/eslint-plugin-xogroup)
[![NSP Status](https://nodesecurity.io/orgs/xo-group/projects/aff9e10c-8c2c-432d-a24b-5ec677a51342/badge)](https://nodesecurity.io/orgs/xo-group/projects/aff9e10c-8c2c-432d-a24b-5ec677a51342)

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-xogroup`:

```
$ npm install eslint-plugin-xogroup --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-xogroup` globally.

## Usage

Add `xogroup` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "xogroup"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "xogroup/rule-name": 2
    }
}
```

Also extend existing configurations under the extends section.

```json
{
    "extends": [
        "plugin:xogroup/recommended",
        "plugin:xogroup/hapijs",
        "plugin:xogroup/angular",
    ]
}
```

## Supported Rules

__No Custom Rules__

## Suported Configurations

- hapijs
- angular



