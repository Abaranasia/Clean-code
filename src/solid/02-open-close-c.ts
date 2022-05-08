import axios from 'axios';

export class HttpClient {
  
   async getAxios( url: string): Promise<{ data: any; status: number }> {
    const { data, status } = await axios.get(url);
    // console.log({ status });
    return { data, status };
  };

  // Creamos un método alternativo para reemplazar Axios en el proyecto
  // Al haber abstrairdo su uso antes a esta clase, reemplazarlo es trivial
  async get( url: string): Promise<{ data: any; status: number }> {
    const resp = await fetch ( url );
    const data= await resp.json ()

    // console.log({ status });
    return { data, status: resp.status };
  };

};
