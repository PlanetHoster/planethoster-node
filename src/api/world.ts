import { HttpClient } from "../utilities/http-client";
import * as iworld from '../utilities/interfaces/world-interfaces'
export class World{

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient){
    this.httpClient = httpClient;
  }

  public async testConnection(){
    return this.httpClient.getCall(
      {
        path: '/world-api/test-connection', 
        payload: {}
      }
    );
  }

  public async getAccounts(){
    return this.httpClient.getCall(
      {
        path: '/world-api/test-connection', 
        payload: {}
      }
    );
  }

  public async createAccount(params: iworld.ICreateAccount){
    return this.httpClient.postCall(
      {
        path: '/world-api/create-account',
        payload: params
      }
    );
  }
  
  public async suspendAccount(params: iworld.ISuspend){
    return this.httpClient.postCall(
      {
        path: '/world-api/suspend-account',
        payload: params
      }
    );
  }

  public async unsuspendAccount(params: iworld.IId){
    return this.httpClient.postCall(
      {
        path: '/world-api/unsuspend-account',
        payload: params
      }
    );
  }
  
  public async modifyRessources(params: iworld.IIdRess){
    return this.httpClient.postCall(
      {
        path: '/world-api/modify-ressources',
        payload: params
      }
    );
  }

  public async upgradePlan(params: iworld.IRess){
    return this.httpClient.postCall(
      {
        path: '/world-api/upgrade-plan',
        payload: params
      }
    );
  }

}