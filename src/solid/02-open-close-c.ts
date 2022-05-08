import axios from 'axios';

export class HttpClient {
  
   async get( url: string): Promise<{ data: any; status: number }> {
    const { data, status } = await axios.get(url);
    // console.log({ status });
    return { data, status };
  }
};
