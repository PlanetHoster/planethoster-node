export interface ISldTld {
  sld: string;
  tld: string;
}

export interface IContactDetails{
  sld: string;
  tld: string;
  registrant_first_name: string;
  registrant_last_name: string;
  registrant_email: string;
  registrant_company_name: string;
  registrant_address1: string;
  registrant_address2?: string;
  registrant_city: string;
  registrant_postal_code: string;
  registrant_state: string;
  registrant_country_code: string;
  registrant_phone: string;
}

export interface INameservers{
  sld: string;
  tld: string;
  ns1: string;
  ns2: string;
  ns3: string;
  ns4: string;
  ns5: string;
}

export interface IPhDnsRecords{
  sld: string;
  tld: string;
  //
  hostname1: string;
  address1: string;
  type1: string;
  priority1: string;
  // Block can be repeated as hostname2, address2, type2, priority2 etc...
  [index: string]: any;
}

export interface IRegLock{
  sld: string;
  tld: string;
  lock_action: 'Lock' | 'Unlock'
}

export interface IRegisterDomain{
  sld: string;
  tld: string;
  period: number;
  ns1: string;
  ns2: string;
  ns3?: string;
  ns4?: string;
  ns5?: string;
  id_protection: boolean;
  registrant_first_name: string;
  registrant_last_name: string;
  registrant_email: string;
  registrant_company_name: string;
  registrant_address1: string;
  registrant_address2?: string;
  registrant_city: string;
  registrant_postal_code: string;
  registrant_state: string;
  registrant_country_code: string;
  registrant_phone: string;
  register_if_premium: boolean;
  user_planethoster_nameservers?: string;
  [index: string]: any;
}

export interface IRenewDomain{
  sld: string;
  tld: string;
  period: number;
}

export interface ITransferDomain{
  sld: string;
  tld: string;
  epp_code: string;
}