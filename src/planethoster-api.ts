import { Domain } from "./api/domain";
import { World } from "./api/world";
import * as ifm from './utilities/interfaces/interfaces'
import { HttpClient } from "./utilities/http-client";

export class PlanetHosterApi{

  private apiCredentials: ifm.ICredentials
  private httpClient: HttpClient;

  constructor(apiCredentials: ifm.ICredentials){
    this.apiCredentials = apiCredentials;
    this.httpClient = new HttpClient(this.apiCredentials);
  }

  public domain(): Domain{
    return new Domain(this.httpClient);
  }

  public world(): World{
    return new World(this.httpClient);
  }

}

module.exports = PlanetHosterApi;