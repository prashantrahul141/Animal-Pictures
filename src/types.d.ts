type TCatApiResponse = {
  tags: Array<string>;
  createdAt: string;
  updatedAt: string;
  validated: boolean;
  owner: null | string;
  file: string;
  mimetype: string;
  size: number;
  _id: string;
  url: string;
};

type TDogApiResponse = { message: string; status: string };

export { TCatApiResponse, TDogApiResponse };
