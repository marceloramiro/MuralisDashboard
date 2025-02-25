import { user } from "./mocks";
import { delayApiCall } from "./helper/delayApiCall";

interface GetUserResponse {
  data: {
    name: string;
    email: string;
  };
}

export const getUser = (): Promise<GetUserResponse> => {
  return delayApiCall(user) as Promise<GetUserResponse>;
};
