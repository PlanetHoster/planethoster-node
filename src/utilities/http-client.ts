import * as ifm from "./interfaces/interfaces";
import * as httpm from "typed-rest-client/HttpClient";
import * as qs from "querystring"

const BASE_URL: string = 'https://api.planethoster.net'

export class HttpClient{

  protected httpc: httpm.HttpClient;

  constructor(apiCreds: ifm.ICredentials){
    this.httpc = new httpm.HttpClient('planethoster-node-client', [], {
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-API-KEY': apiCreds.api_key,
        'X-API-USER': apiCreds.api_user
      }
    });
  }

  public async postCall(params: ifm.ICallParams){
    let completePath = BASE_URL + params.path;
    let res: httpm.HttpClientResponse = await this.httpc.post(
      completePath, 
      JSON.stringify(params.payload)
    )
    let body: string = await res.readBody();
    if (await res.message.statusCode != 200){
      return this.errorsHandler(
        res.message.statusCode,
        completePath,
      );
    }
    return JSON.parse(body);
  }

  public async getCall(params: ifm.ICallParams){
    let completePath = BASE_URL + params.path + '?' + qs.stringify(params.payload);
    let res: httpm.HttpClientResponse = await this.httpc.get(completePath);
    let body: string = await res.readBody();
    if (await res.message.statusCode != 200){
      return this.errorsHandler(
        res.message.statusCode,
        completePath,
      );
    }
    return JSON.parse(body);
  }

  private errorsHandler(status: any, path: string){
    return {
      status: status,
      path: path,
      datetime: new Date().toLocaleString()
    }
  }
}