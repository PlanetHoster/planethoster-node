var PlanetHosterNode = require("../planethoster-node");


test('PlanetHosterNode', () => {
  var planethosterClient = new PlanetHosterNode({
    api_key: '',
    api_user: ''
  });
  planethosterClient.domain().testConnection().then(function (result: any){
    expect(result.error_reseller_not_found).toBeTruthy();
  });
});