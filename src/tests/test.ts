var PlanetHosterApi= require("../planethoster-api");

test('PlanetHosterNode', () => {
  var planethosterClient = new PlanetHosterApi({
    api_key: '',
    api_user: ''
  });
  planethosterClient.domain().testConnection().then(function (result: any){
    expect(result.error_reseller_not_found).toBeTruthy();
  });
});