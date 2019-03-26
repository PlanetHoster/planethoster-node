export interface IId{
  id: string;
}

export interface IIdRess{
  id: string;
  cpu?: number;
  mem?: number;
  io?: number; 
}

export interface ICreateAccount{
  domain: string;
  country: string;
  cpu?: number;
  mem?: number;
  io?: number;
  cms?: string;
  ls?: boolean;
}

export interface ISuspend{
  id: string;
  reason: string;
}

export interface IRess{
  cpu?: number;
  mem?: number;
  io?: number;
}