# Planethoster Api

[![NPM](https://nodei.co/npm/node-planethoster.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/node-planethoster/)
[![Build Status](https://travis-ci.org/PlanetHoster/planethoster-node.svg?branch=master)](https://travis-ci.org/PlanetHoster/planethoster-node)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

![PlanetHoster NPM logo](img/planethoster-node.png)

An async API wrapper for the PlanetHoster API, every call will return a __promise__

Please refer to the documentation of the [PlanetHoster API](https://apidoc.planethoster.com/) for all calls explained.

## Installation
    npm install planethoster-node

## Initialization
In order to use this module, you have to import it first

```javascript
var PlanetHosterNode = require('planethoster-node');
```

Then, initialize the PlanetHoster object with the keys you obtained from the [PlanetHoster Dashboard](https://my.planethoster.com/)

```javascript
const planethosterClient = new PlanetHosterNode({
  api_key: 'API_KEY',
  api_user: 'API_USER'
})
```

## Examples
```javascript
// Domain API
planethosterClient.domain().testConnection().then(function (result){
  console.log(result);
}).catch(function (e){
  console.log(e);
})

// World API
planethosterClient.world().testConnection().then(function (result){
  console.log(result);
}).catch(function (e){
  console.log(e);
})
```