import { HttpClient } from "../utilities/http-client";
import * as idom from "../utilities/interfaces/domain-interfaces";

export class Domain{

  private httpClient: HttpClient;

  constructor(httpClient: HttpClient){
    this.httpClient = httpClient;
  }

  
  public async testConnection(){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/test-connection', 
        payload: {}
      }
    );
  }

  public async tldPrices(){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/tld-prices', 
        payload: {}
      }
    );
  }

  public async accountInfo(){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/account-info', 
        payload: {}
      }
    );
  }

  public async checkAvailability(params: idom.ISldTld){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/account-info',
        payload: params
      }
    );
  }

  public async domainInfo(params: idom.ISldTld){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/domain-info',
        payload: params
      }
    );
  }

  public async getContactDetails(params: idom.ISldTld){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/get-contact-details',
        payload: params
      }
    );
  }

  public async getNameservers(params: idom.ISldTld){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/get-nameservers',
        payload: params
      }
    );
  }

  public async getPhDnsRecord(params: idom.ISldTld){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/get-ph-dns-records',
        payload: params
      }
    );
  }

  public async getRegistrarLock(params: idom.ISldTld){
    return this.httpClient.getCall(
      {
        path: '/reseller-api/get-registrar-lock',
        payload: params
      }
    );
  }

  public async saveContactDetails(params: idom.IContactDetails){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/save-contact-details',
        payload: params
      }
    )
  }

  public async saveNameservers(params: idom.INameservers){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/save-nameservers',
        payload: params
      }
    )
  }

  public async savePhDnsRecords(params: idom.IPhDnsRecords){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/save-ph-dns-records',
        payload: params
      }
    )
  }

  public async saveRegistrarLock(params: idom.IRegLock){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/save-registrar-lock',
        payload: params
      }
    )
  }

  public async emailEppCode(params: idom.ISldTld){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/email-epp-code',
        payload: params
      }
    )
  }

  public async registerDomain(params: idom.IRegisterDomain){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/register-domain',
        payload: params
      }
    )
  }

  public async renewDomain(params: idom.IRenewDomain){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/renew-domain',
        payload: params
      }
    )
  }

  public async transferDomain(params: idom.ITransferDomain){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/transfer-domain',
        payload: params
      }
    )
  }

  public async deletePhDnsZone(params: idom.ISldTld){
    return this.httpClient.postCall(
      {
        path: '/reseller-api/delete-ph-dns-zone',
        payload: params
      }
    )
  }

}