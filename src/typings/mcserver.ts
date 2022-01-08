// Generated by https://quicktype.io

export interface MCServer {
  ip: string;
  port: number;
  debug: Debug;
  motd: MOTD;
  players: Players;
  version: string;
  online: boolean;
  protocol: number;
  hostname: string;
  software: string;
  icon?: string;
}

export interface Debug {
  ping: boolean;
  query: boolean;
  srv: boolean;
  querymismatch: boolean;
  ipinsrv: boolean;
  cnameinsrv: boolean;
  animatedmotd: boolean;
  cachetime: number;
  apiversion: number;
}

export interface MOTD {
  raw: string[];
  clean: string[];
  html: string[];
}

export interface Players {
  online: number;
  max: number;
}
