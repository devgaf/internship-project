import { getUrlMonetarias } from "./bcra-utils.js"; 

export class Environment {
  protocol;
  host;
  port;
  endPoint;
  constructor(host = 'localhost', port='8080', endPoint = 'bcra-data-icl', protocol = 'http') {
    this.host = host;
    this.port = port;
    this.endPoint = endPoint;
    this.protocol = protocol;
  }
  getIclUrl() {
    return `${this.protocol}://${this.host}:${this.port}/${this.endPoint}`;
  }

  getBcraMonetariasUrl(variable, limit=0) {
    // Devuelve solo la ruta relativa, para que el proxy funcione
    return `${getUrlMonetarias()}/${variable}/?limit=${limit}`;
  }

}

