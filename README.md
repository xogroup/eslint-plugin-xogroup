# eslint-plugin-xogroup

eslinting plugin ruleset for HapiJs environment

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
        "xogroup/recommended",
        "xogroup/hapijs"
    ]
}
```

## Supported Rules

__No Custom Rules__

## Suported Configurations

- hapijs



