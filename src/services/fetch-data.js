import { Environment } from './environment.js';

export class FetchData {

    constructor() { }
    getIclData() {
        return this.getBcraMonetariasUrl('40')
    }


    getBcraMonetariasUrl(variable) {
        const env = new Environment();
        return this.fetchData(env.getBcraMonetariasUrl(variable))
    }

    fetchData(url) {
        console.log('Obteniendo datos de ', url);

        return fetch(url)
            .then(response => {
                if (!response.ok) throw new Error('Error en la respuesta de la API');
                return response.json();
            })
            .catch(error => {
                console.error('Error:', error);
                throw error;
            });
    }

}