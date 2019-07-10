# Planethoster Api

[![NPM](https://nodei.co/npm/planethoster-api.png)](https://nodei.co/npm/planethoster-api/)

[![Build Status](https://travis-ci.org/PlanetHoster/planethoster-node.svg?branch=master)](https://travis-ci.org/PlanetHoster/planethoster-node)
![npm](https://img.shields.io/npm/dw/planethoster-api.svg)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

An async API wrapper for the PlanetHoster API, every call will return a __promise__

Please refer to the documentation of the [PlanetHoster API](https://apidoc.planethoster.com/) for all calls explanation.

You can try it now with [NPM RunKit](https://npm.runkit.com/planethoster-api)

## Installation
    npm install planethoster-api

## Initialization
In order to use this module, you have to import it first

```javascript
var planethosterApi = require('planethoster-api');
```

Then, initialize the PlanetHoster object with the keys you obtained from the [PlanetHoster Dashboard](https://my.planethoster.com/)

```javascript
const planethosterClient = new planethosterApi({
  api_key: 'API_KEY',
  api_user: 'API_USER'
})
```

## Examples
```javascript
// Domain API
async function domainTestConnection(){
    let res = await planethosterClient.domain().testConnection();
    console.log(res);
}

domainTestConnection();

// World API
async function worldTestConnection(){
    let res = await planethosterClient.world().testConnection();
    console.log(res);
}

worldTestConnection();
```

## Possible functions
Make sure to checkout documentation for specific parameters and more explanation [ApiDoc](https://apidoc.planethoster.com/)
### Domain
```javascript
let res = await planethosterClient.domain()[...] // options down below
```
```javascript
.tldPrices() // Returns domain name prices for registration, renewal and transfer.
.accountInfo() // Returns information pertinent to your reseller account. (active doamin, credit left, etc..)
.checkAvailability() // Checks whether a domain name is available to register.
.domainInfo() // Retrieve information for a domain which you successfully registered or created a transfer order.
.getContactDetails() // Returns the contact information (WHOIS information) for the active domain name.
.getNameservers() // Returns the nameservers for a registered domain name.
.getPhDnsRecord() // Retrieves the DNS records for the active domain name registered with PlanetHoster.
.getRegistrarLock() // Get the lock status of a registered domain name.
.saveContactDetails() // Saves the contact information (WHOIS information) for the given active domain name.
.saveNameservers() // Update nameservers associated with your domain.
.savePhDnsRecords() // Saves the DNS records for the active domain name registered with PlanetHoster.
.saveRegistrarLock() // Lock or unlock a registered and active domain name.
.emailEppCode() // Email the domain name registrant their EPP code (also called Auth Info) for the given domain.
.registerDomain() // Attempts to register a domain name for 1 to 10 years.
.renewDomain() // Renew an already active domain name for 1-10 years.
.transferDomain() // Transfer a domain name from your current registrar to PlanetHoster.
.deletePhDnsZone() // Deletes the DNS zone on the PlanetHoster DNS servers for the given domain.
```
### World (Hosting)
\* [What is a world hosting?](https://www.planethoster.com/en/World-Hosting)
```javascript
let res = await planethosterClient.world()[...] // options down below
```
```javascript
.getAccounts() // Displays The World account and all World sub accounts information.
.createAccount() // Creates a world hosting account, assigns the requested resources and install a CMS
.suspendAccount() // Proceed to the suspension of a World account.
.unsuspendAccount() // Reactivate suspended world account.
.modifyRessources() // Modify the resources associated with a World account.
.upgradePlan() // Increases resources associated with The World account.
```
