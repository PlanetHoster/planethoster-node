# Planethoster Api

[![NPM](https://nodei.co/npm/planethoster-api.png)](https://nodei.co/npm/planethoster-api/)


[![Build Status](https://travis-ci.org/PlanetHoster/planethoster-node.svg?branch=master)](https://travis-ci.org/PlanetHoster/planethoster-node)
![David](https://img.shields.io/david/dev/PlanetHoster/planethoster-node.svg)
![David](https://img.shields.io/david/PlanetHoster/planethoster-node.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An async API wrapper for the PlanetHoster API, every call will return a __promise__

Please refer to the documentation of the [PlanetHoster API](https://apidoc.planethoster.com/) for all calls explained.

## Installation
    npm install planethoster-api

## Initialization
In order to use this module, you have to import it first

```javascript
var PlanetHosterApi = require('planethoster-api');
```

Then, initialize the PlanetHoster object with the keys you obtained from the [PlanetHoster Dashboard](https://my.planethoster.com/)

```javascript
const planethosterClient = new PlanetHosterApi({
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