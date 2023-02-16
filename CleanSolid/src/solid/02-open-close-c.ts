export interface HttpResponse<T> {
  data: T;
  status: number;
}

export class HttpClient {
  async get<T>(
    url: string,
    headers?: Record<string, string>
  ): Promise<HttpResponse<T>> {
    try {
      const response = await fetch(url, { headers });
      const data = (await response.json()) as T;
      return { data, status: response.status };
    } catch (error) {
      console.error(`Error occurred while fetching ${url}: ${error}`);
      throw error;
    }
  }
}
