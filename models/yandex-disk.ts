export interface PublicResourcesResponse {
  _embedded: {
    items: {
      name: string;
      sizes: {
        url: string;
        name: string;
      }[];
    }[];
  };
}
